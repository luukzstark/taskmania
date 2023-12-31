import { Iboard } from "@/@types/boards";
import { ICard } from "@/@types/cards";
import { IList } from "@/@types/list";
import { Toast } from "@/components/Notifications/Toast";
import { addMember } from "@/services/requests/boards/AddMember";
import { RemoveMember } from "@/services/requests/boards/removeMember";
import { AddMemberCard } from "@/services/requests/cards/AddMemberCard";
import { RemoveCard } from "@/services/requests/cards/RemoveCard";
import { createTask } from "@/services/requests/cards/createTask";
import { RemoveList } from "@/services/requests/lists/RemoveCard";
import { changeCardsOrder } from "@/services/requests/lists/changeCardsOrder";
import { createList } from "@/services/requests/lists/create";
import { editTitleList } from "@/services/requests/lists/editTitle";
import {
  ReactNode,
  createContext,
  useCallback,
  useState
} from "react";


interface BoardProviderProps {
  children: ReactNode;
}
interface IContext {
  board: Iboard;
  setBoardData: (data: Iboard) => void;
  handleCreateList: () => void;
  handleListTitle: (newTitle: string, id: string, boardId: string) => void;
  handleCreateNewTask: (title: string, listId: string, boardId: string) => void;
  handleSendInvitation: (email: string, id: string) => void;
  handleRemoveMember: (boardId: string, userId: string) => void;
  onDragEnd: (result: any) => void;
  handleAddMemberCard: (add: boolean, cardId: string, userId: string, boardId: string, listId: string, userName: string) => void;
  handleRemoveTask: (cardId: string, userId: string, boardId: string, listId: string) => void;
  handleRemoveList: (boardId: string, listId: string) => void;
}

export const BoardContext = createContext({} as IContext);

export function BoardProvider({ children }: BoardProviderProps) {
  const [board, setBoard] = useState<Iboard>({} as Iboard);

  const setBoardData = useCallback((data: Iboard) => {
    setBoard(data);
  }, []);

  const handleSendInvitation = async (email: string, id: string) => {
    try {
      if (!email) {
        return
      }

      const newMembers = await addMember({ boardId: String(id), email })
      console.log(newMembers);

      setBoard(prev => ({
        ...prev,
        members: [...prev.members, newMembers]
      }))

    } catch (error) {
      alert('Algo deu errado')
    }
  }

  const handleRemoveMember = async (boardId: string, userId: string) => {
    await RemoveMember({
      boardId,
      userId
    })

    setBoard(prev => ({
      ...prev,
      members: prev.members.filter(member => member.user._id !== userId)
    }))
  }

  const handleCreateList = async () => {
    const addNewList = {
      title: "Enter a List name",
      boardId: board._id,
    };
    const response = await createList(addNewList);

    setBoard((prev) => {
      return {
        ...prev,
        lists: [...prev.lists, response],
      };
    });
  };

  const handleAddMemberCard = useCallback(async (add: boolean, cardId: string, userId: string, boardId: string, listId: string, userName: string) => {
    if (add) {
      await AddMemberCard({ add, cardId, userId, boardId })

      setBoard(prev => ({
        ...prev,
        lists: prev.lists.map(list => {
          if (list._id === listId) {
            return {
              ...list,
              cards: list?.cards?.map(element => {
                if (element._id === cardId) {
                  return {
                    ...element,
                    members: [...element.members, { user: userId, name: userName }]
                  }
                }
                return element
              })
            }
          }
          return list
        })
      })
      )
    } else {
      await AddMemberCard({ add, cardId, userId, boardId })

      setBoard(prev =>
      ({
        ...prev,
        lists: prev.lists.map(list => {
          if (list._id === listId) {
            return {
              ...list,
              cards: list?.cards?.map(element => {
                if (element._id === cardId) {
                  return {
                    ...element,
                    members: element.members.filter(member => member.user !== userId)
                  }
                }
                return element
              })
            }
          }
          return list
        })
      }))
    }


  }, [])

  const handleListTitle = useCallback(
    async (newTitle: string, id: string, boardId: string) => {
      const response = await editTitleList({ newTitle, listId: id, boardId });

      if (response.status === 200) {
        setBoard((prev) => {
          return {
            ...prev,
            lists: prev.lists.map((list) => {
              if (list._id === id) {
                return {
                  ...list,
                  title: newTitle,
                };
              } else {
                return list;
              }
            }),
          };
        });
      } else {
        <Toast error={true} message="Operação inválida" />;
      }
    },
    []
  );

  const handleCreateNewTask = async (
    title: string,
    listId: string,
    boardId: string
  ) => {
    const newTask = {
      title,
      listId,
      boardId,
    };

    const response = await createTask(newTask);

    if (response.status === 200) {
      setBoard((prev) => ({
        ...prev,
        lists: prev.lists.map((list) => {
          if (list._id === listId) {
            if (list?.cards && list.cards.length > 0) {
              return {
                ...list,
                cards: [...list.cards, response.data.card],
              };
            }
            return {
              ...list,
              cards: [response.data.card],
            };
          } else {
            return list;
          }
        }),
      }));
    } else {
      <Toast error={true} message="Operação inválida" />;
    }
  };

  const handleChangeCardOrder = useCallback(async (boardId: string, listToChangeCardsOrder: IList[]) => {
    await changeCardsOrder({
      boardId,
      listToChangeCardsOrder
    })
  }, [board])

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result
    console.log(result)

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    const start = board.lists.find((list) => list._id === source.droppableId)
    const finish = board.lists.find((list) => list._id === destination.droppableId)
    const taskMoveds = Array.from(start?.cards || []);
    const cardMoved: ICard = taskMoveds.find(task => task._id === draggableId) || {} as ICard

    if (start === finish) {
      taskMoveds.splice(source.index, 1)
      taskMoveds.splice(destination.index, 0, cardMoved)

      const listsToSendToChange = [{
        ...start,
        cards: taskMoveds
      }]

      //@ts-ignore
      handleChangeCardOrder(board._id, listsToSendToChange)

      setBoard(prev => ({
        ...prev,
        lists: prev.lists.map(list => {
          if (list._id === source.droppableId) {
            return {
              ...list,
              cards: taskMoveds
            }
          }
          return list
        })
      }))
      return
    }

    const startCards = Array.from(start?.cards || [])
    startCards.splice(source.index, 1)


    const finishCards = Array.from(finish?.cards || [])
    finishCards.splice(destination.index, 0, cardMoved)

    setBoard(prev => ({
      ...prev,
      lists: prev.lists.map((list) => {
        if (list._id === source.droppableId) {
          return {
            ...list,
            cards: startCards
          }
        }
        if (list._id === destination.droppableId) {
          return {
            ...list,
            cards: finishCards
          }
        }
        return list
      })
    }));

    const listsToSendToChange = [
      {
        ...start,
        cards: startCards
      },
      {
        ...finish,
        cards: finishCards
      }
    ]
    //@ts-ignore
    handleChangeCardOrder(board._id, listsToSendToChange)

  }

  const handleRemoveList = useCallback(async (boardId: string, listId: string) => {
    await RemoveList({ boardId, listId })
    setBoard(prev => ({
      ...prev,
      lists: prev.lists.filter(list => list._id !== listId)
    })
    )
  }, [])

  const handleRemoveTask = useCallback(async (cardId: string, userId: string, boardId: string, listId: string) => {
    await RemoveCard({ cardId, userId, boardId, listId })
    setBoard(prev => ({
      ...prev,
      lists: prev.lists.map((list) => {
        if (list._id === listId) {
          return {
            ...list,
            cards: list.cards && list?.cards.filter((card) => card._id !== cardId)
          }
        }
        return list
      })
    })
    )
  }, [])

  return (
    <BoardContext.Provider
      value={{
        board,
        setBoardData,
        handleCreateList,
        handleListTitle,
        handleCreateNewTask,
        handleSendInvitation,
        handleRemoveMember,
        onDragEnd,
        handleAddMemberCard,
        handleRemoveTask,
        handleRemoveList
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}
