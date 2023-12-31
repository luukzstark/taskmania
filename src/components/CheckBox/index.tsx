import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export function CheckBox() {
    return (
        <div className="flex items-center">
            <Checkbox.Root
                className="shadow-blackA7 hover:bg-violet3 flex h-[14px] w-[14px] appearance-none items-center justify-center bg-transparent border-blue-900 outline-none shadow-[0_0_0_2px_black]"
                defaultChecked
                id="c1"
            >
                <Checkbox.Indicator className="text-violet11">
                    <CheckIcon />
                </Checkbox.Indicator>
            </Checkbox.Root>
        </div>
    )
}