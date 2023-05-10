import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { authUser } from "@/services/requests/auth/auth";
import { saveLocalStorage } from "@/utils/saveLocalStorage";
import { zodResolver } from '@hookform/resolvers/zod';
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";


const schema = z.object({
    email: z.string().email('E-mail ou senha incorretos'),
    password: z.string()
})
type FormData = z.infer<typeof schema>;

export default function SignIn() {
    const router = useRouter()
    const { register, handleSubmit } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        const response = await authUser(data);
        if(response.token) {
            saveLocalStorage(response.token, '@taskmania:token')
            saveLocalStorage(response, '@taskmania:user')  
            router.push('/')     
        }
    }

    return (
        <main className='w-full h-[calc(100vh-7rem-4rem)] flex flex-col items-center justify-center bg-slate-300'>
            <section className="w-full h-full flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className='w-[448px] h-[473px] flex flex-col items-center justify-center rounded-[10px] bg-gradient-to-bl from-orange-100 to-orange-300 gap-y-5'>
                    <img src="./task-white 2.png" alt="" width={230} height={27} />
                    <Input
                        {...register('email')}
                        Label="E-mail"
                        Type="email"
                        Placeholder="name@example.com"
                    />

                    <Input
                        {...register('password')}
                        Type="password"
                        Label="Password"
                        Placeholder="••••••"
                    />
                    <Button
                        text="Sing In"
                        type="submit"
                    />
                    <span className='text-white font-lexed' >Don’t have an account?
                        {' '}
                        <Link href="/signup" className="text-regular text-white hover:underline">
                            Sign up now!
                        </Link>
                    </span>
                </form>
            </section>
        </main>
    );
}
