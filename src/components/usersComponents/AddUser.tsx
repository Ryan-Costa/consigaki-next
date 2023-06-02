import React, { useState, ChangeEvent } from "react";
import { IconArrowBack, IconPartners } from "../../../public/icons";
import { Inter } from "@next/font/google";
import ToggleSwitch from "../ToggleSwitch";
import { Dropdown } from "../Dropdown";
import { UserProps } from "@/interfaces/userProps";
import ButtonSave from "../common/ButtonSave";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface AddProps {
  item: UserProps;
  onClose: () => void;
}

export default function AddUser({ item, onClose }: AddProps) {
  const [savedItem, setSavedItem] = useState<UserProps>(item);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSavedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onClose();
    console.log("Item editado:", savedItem);
  };

  const handleGoBack = () => {
    onClose();
    console.log("voltei");
  };

  return (
    <div>
      <button className="" onClick={handleGoBack}>
        {IconArrowBack}
      </button>

      <div className="mt-12 flex gap-2">
        <h1 className="text-lg font-bold">Adicionar Usuário</h1>
        {IconPartners}
      </div>
      <p
        className={`${inter.className} text-sm tracking-tight text-text-regular`}
      >
        Prencha todos os campos
      </p>
      <div className="mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Nome
          </label>
          <input
            name="nome"
            type="text"
            placeholder="David Bessa Pontes"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={setSavedItem.razaoSocial}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            E-mail
          </label>
          <input
            name="nome"
            type="text"
            placeholder="OrpelNet@Gmail.acom"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={setSavedItem.razaoSocial}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            CPF
          </label>
          <input
            name="cadastro"
            type="text"
            placeholder="000.000.000-00"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={setSavedItem.cadastro}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Celular
          </label>
          <input
            name="alterado"
            type="text"
            placeholder="(00) 0 0000-0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Data de nascimento
          </label>
          <input
            name="alterado"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Perfil
          </label>
          <Dropdown
            defaultValue="Selecione"
            type="form"
            options={["Cliente", "Suporte", "Administrador"]}
          />
        </div>
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Acesso
          </label>
          <Dropdown
            defaultValue="Login liberado"
            type="form"
            options={["Login bloqueado", "Login liberado"]}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Cadastro
          </label>
          <input
            name="cadastro"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={setSavedItem.cadastro}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Alterado
          </label>
          <input
            name="cadastro"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={setSavedItem.cadastro}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <ToggleSwitch />
      <ButtonSave handleSave={handleSave} />
    </div>
  );
}
