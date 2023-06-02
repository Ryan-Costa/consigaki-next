import React, { useState, ChangeEvent } from "react";
import { IconArrowBack, IconPartners } from "../../../public/icons";
import { Inter } from "@next/font/google";
import ToggleSwitch from "../ToggleSwitch";
import { Dropdown } from "../Dropdown";
import { UserProps } from "@/interfaces/userProps";
import { TableEditUsers } from "../table/TableEditUsers";
import ButtonSave from "../common/ButtonSave";
// import { useForm } from "react-hook-form";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface EditProps {
  item: UserProps;
  onClose: () => void;
}

export default function EditUser({ item, onClose }: EditProps) {
  const [editedItem, setEditedItem] = useState<UserProps>(item);
  const [activeSection, setActiveSection] = useState<string>("agreements");
  const [activeButton, setActiveButton] = useState("");
  // const { control, handleSubmit } = useForm({
  //   defaultValues: {},
  // });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onClose();
    console.log("Item editado:", editedItem);
  };

  const handleGoBack = () => {
    // window.location.reload();
    onClose();
  };

  const handleAgreementsSection = () => {
    setActiveSection("agreements");
  };

  const handleRequestsSection = () => {
    setActiveSection("requests");
  };

  const handleCallsSection = () => {
    setActiveSection("calls");
  };

  const handleBankDataSection = () => {
    setActiveSection("bankData");
  };

  const handleButtonClick = (section: any) => {
    setActiveButton(section);
  };

  let sectionContent;

  activeSection === "agreements"
    ? (sectionContent = <TableEditUsers />)
    : activeSection === "requests"
    ? (sectionContent = (
        <>
          <div className="flex h-[271px] w-full items-center justify-center">
            <p>Solicitações</p>
          </div>
        </>
      ))
    : activeSection === "calls"
    ? (sectionContent = (
        <>
          <div className="flex h-[271px] w-full items-center justify-center">
            <p>Atendimentos</p>
          </div>
        </>
      ))
    : activeSection === "bankData"
    ? (sectionContent = (
        <>
          <div className="flex h-[271px] w-full items-center justify-center">
            <p>Dados Bancários</p>
          </div>
        </>
      ))
    : null;

  return (
    <div>
      <button className="" onClick={handleGoBack}>
        {IconArrowBack}
      </button>

      <div className="mt-12 flex gap-2">
        <h1 className="text-lg font-bold">Informações do Usuário</h1>
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
            value={editedItem.nome}
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
            value={editedItem.email}
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
            name="CPF"
            type="text"
            placeholder="000.000.000-00"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.cpf}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Celular
          </label>
          <input
            name="celular"
            type="text"
            placeholder="(00) 0 0000-0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.celular}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Data de nascimento
          </label>
          <input
            name="dataNascimento"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.dataNascimento}
            onChange={handleInputChange}
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
            value={editedItem.cadastro}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Alterado
          </label>
          <input
            name="alterado"
            type="text"
            placeholder="00/00/0000"
            readOnly
            disabled
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.cadastro}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-11">
        <button
          className={`btn text-xl font-bold ${
            activeButton === "agreements" ? "active" : ""
          }`}
          onClick={() => {
            handleButtonClick("agreements");
            handleAgreementsSection();
          }}
          style={{
            position: "relative",
            borderBottom:
              activeButton === "agreements" ? "3px solid black" : "none",
          }}
        >
          CONVÊNIOS
        </button>
        <button
          className={`btn text-xl font-bold ${
            activeButton === "requests" ? "active" : ""
          }`}
          onClick={() => {
            handleButtonClick("requests");
            handleRequestsSection();
          }}
          style={{
            position: "relative",
            borderBottom:
              activeButton === "requests" ? "3px solid black" : "none",
          }}
        >
          SOLICITAÇÕES
        </button>
        <button
          className={`btn text-xl font-bold ${
            activeButton === "calls" ? "active" : ""
          }`}
          onClick={() => {
            handleButtonClick("calls");
            handleCallsSection();
          }}
          style={{
            position: "relative",
            borderBottom: activeButton === "calls" ? "3px solid black" : "none",
          }}
        >
          ATENDIMENTOS
        </button>
        <button
          className={`btn text-xl font-bold ${
            activeButton === "bankData" ? "active" : ""
          }`}
          onClick={() => {
            handleButtonClick("bankData");
            handleBankDataSection();
          }}
          style={{
            position: "relative",
            borderBottom:
              activeButton === "bankData" ? "3px solid black" : "none",
          }}
        >
          DADOS BANCÁRIOS
        </button>
      </div>
      {sectionContent}
      <ButtonSave handleSave={handleSave} />
    </div>
  );
}
