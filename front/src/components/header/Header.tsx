import { ContainerMain } from "../containers/containerMain/ContainerMain";
import { StyleHeader } from "./StyleHeeader";
import logo from "../../assets/imgs/logo.png"
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { SetStateAction, } from "react";


interface IHeaderProps {
    header?: "dashboard" | undefined;
    tagChildren?: boolean | undefined;
    openMenu?: boolean;
    setOpenMenu?: React.Dispatch<boolean>;
    children?: React.ReactNode
}

export function Header({ header, tagChildren, openMenu, setOpenMenu, children }: IHeaderProps) {

    return (
        <StyleHeader>
            <ContainerMain header={header}>
                {tagChildren? (
                    <>
                        <section className="header__menu">
                            <Image src={logo} alt="Foto da logo" />
                            {!openMenu? (
                                <IoMenu onClick={() => setOpenMenu && setOpenMenu(true)}/>
                                ):(
                                <CgClose onClick={() => setOpenMenu && setOpenMenu(false)}/>
                            )}
                        </section>
                        {children}
                    </>
                ): (
                    <Image src={logo} alt="Foto da logo" />
                )}  
            </ContainerMain>
        </StyleHeader>
    )
}