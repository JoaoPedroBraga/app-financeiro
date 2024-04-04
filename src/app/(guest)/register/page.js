'use client'
import RegisterForm from "@/components/RegisterForm";
import * as S from './style';

export const registerPage = () => {
    return (
        <S.RegisterWrapper>
            <RegisterForm/>
        </S.RegisterWrapper>
    )
}

export default registerPage;