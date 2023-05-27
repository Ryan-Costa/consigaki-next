"use client";

import TableAgreementsUsers from "@/components/table/TableAgreementsUsers";
import EditAgreement from "@/components/agreementsComponents/EditAgreement";
import AddAgreement from "@/components/agreementsComponents/AddAgreement";

import SearchInput from "@/components/SearchInput";
import { useState } from "react";
import { IconPartners } from "../../../../public/icons";

import { Roboto } from "@next/font/google";
import { DropdownTable } from "@/components/dropdown/DropdownTable";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface ItemProps {
  codigo: string;
  nome: string;
  cadastro: string;
}

export default function Agreements() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemProps | null>(null);
  const [heAddAgreement, setHeAddAgreement] = useState(false);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleEdit = (item: ItemProps) => {
    setSelectedItem(item);
    setIsEditing(true);
  };

  const handleCloseEditScreen = () => {
    setIsEditing(false);
  };

  const handleAddition = () => {
    setHeAddAgreement(true);
  };

  const handleCloseAdditionScreen = () => {
    setHeAddAgreement(false);
  };

  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 
        ${heAddAgreement || isEditing ? "py-9" : "py-14"}`}
      >
        {heAddAgreement ? (
          <AddAgreement
            item={selectedItem!}
            onClose={handleCloseAdditionScreen}
          />
        ) : (
          <>
            {isEditing ? (
              <EditAgreement
                item={selectedItem!}
                onClose={handleCloseEditScreen}
              />
            ) : (
              <>
                <div className="flex w-full justify-between">
                  <h2 className="flex items-center gap-2 text-2xl font-bold">
                    Convênios {IconPartners}
                  </h2>
                  <div className="flex gap-5 ">
                    <DropdownTable />
                    <div className="flex items-center justify-center">
                      <SearchInput onSearch={handleSearch} />
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    onClick={handleAddition}
                    className="rounded-md bg-bs-teal-2 px-6 py-3 text-white outline-none"
                  >
                    + Adicionar Convênios
                  </button>
                </div>
                <TableAgreementsUsers
                  searchTerm={searchTerm}
                  handleEdit={handleEdit}
                  type={"agreements"}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}