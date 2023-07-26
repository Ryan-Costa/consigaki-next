// import React, { useState, ChangeEvent } from 'react'
// import { IconArrowBack, IconPartners } from '../../../../public/icons'
// import { Inter } from 'next/font/google'
// import { Dropdown } from '../../Dropdown'
// import { UserProps } from '@/interfaces/IProps'
// import { TableEditUsers } from './TableEditUsers'
// import { ButtonSave } from '../../Common/ButtonSave'
// import { TableUserRequests } from './TableUserRequests'
// import Calls from './Calls'
// import BankData from './BankData'
// import { Input } from '../../Common/Input'
// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '700'],
// })

// interface EditProps {
//   item: UserProps
//   onClose: () => void
// }

// export default function EditUser({ item, onClose }: EditProps) {
//   const [editedItem, setEditedItem] = useState<UserProps>(item)
//   // const [activeSection, setActiveSection] = useState<string>('agreements')
//   // const [, setActiveButton] = useState('agreements')
//   // const { control, handleSubmit } = useForm({
//   //   defaultValues: {},
//   // });

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setEditedItem((prevItem) => ({
//       ...prevItem,
//       [name]: value,
//     }))
//   }

//   const handleSave = () => {
//     onClose()
//     console.log('Item editado:', editedItem)
//   }

//   const handleGoBack = () => {
//     onClose()
//   }

//   // const handleAgreementsSection = () => {
//   //   setActiveSection('agreements')
//   // }

//   // const handleRequestsSection = () => {
//   //   setActiveSection('requests')
//   // }

//   // const handleCallsSection = () => {
//   //   setActiveSection('calls')
//   // }

//   // const handleBankDataSection = () => {
//   //   setActiveSection('bankData')
//   // }

//   // const handleButtonClick = (section: any) => {
//   //   setActiveButton(section)
//   // }

//   // const sectionContent =
//   //   activeSection === 'agreements' ? (
//   //     <>
//   //       <div className="mt-4">
//   //         <TableEditUsers />
//   //       </div>
//   //     </>
//   //   ) : activeSection === 'requests' ? (
//   //     <>
//   //       <div className="custom-scrollbar mt-4 h-[255px] w-full overflow-auto">
//   //         <TableUserRequests />
//   //       </div>
//   //     </>
//   //   ) : activeSection === 'calls' ? (
//   //     <>
//   //       <div className="custom-scrollbar mt-4 h-[255px] w-full overflow-auto pr-[6px]">
//   //         <Calls />
//   //       </div>
//   //     </>
//   //   ) : activeSection === 'bankData' ? (
//   //     <>
//   //       <div className="custom-scrollbar mt-4 h-[255px] w-full overflow-auto">
//   //         <BankData />
//   //       </div>
//   //     </>
//   //   ) : null

//   return (
//     <div>
//       <button className="" onClick={handleGoBack}>
//         {IconArrowBack}
//       </button>

//       <div className="mt-12 flex gap-2">
//         <h1 className="text-2xl font-bold">Editar Usuário</h1>
//         {IconPartners}
//       </div>
//       <p
//         className={`${inter.className} text-base tracking-tight text-text-regular`}
//       >
//         Prencha todos os campos
//       </p>
//       <div className="mt-6 flex gap-6">
//         <Input
//           label="Nome"
//           name="name"
//           type="text"
//           value={editedItem.name}
//           onChange={handleInputChange}
//           className="w-full"
//         />
//         <Input
//           label="E-mail"
//           name="email"
//           type="text"
//           className="w-full"
//           placeholder="OrpelNet@Gmail.acom"
//           value={editedItem.mail}
//           onChange={handleInputChange}
//         />
//       </div>

//       <div className="mb-6 mt-6 flex gap-6">
//         <Input
//           label="CPF"
//           name="cpf"
//           type="text"
//           className="w-full"
//           placeholder="000.000.000-00"
//           value={editedItem.cpf}
//           onChange={handleInputChange}
//         />

//         <Input
//           label="CPF"
//           name="celular"
//           type="text"
//           placeholder="(00) 0 0000-0000"
//           className="w-full"
//           value={editedItem.cellPhoner}
//           onChange={handleInputChange}
//         />
//         <Input
//           label="Data de nascimento"
//           name="dataNascimento"
//           type="text"
//           className="w-full"
//           placeholder="00/00/0000"
//           value={editedItem.dateBirth}
//           onChange={handleInputChange}
//         />

//         <div className="flex w-full flex-col gap-2">
//           <label htmlFor="" className="font-semibold">
//             Perfil
//           </label>
//           <Dropdown
//             defaultValue="Suporte"
//             type="form"
//             options={['Cliente', 'Suporte', 'Administrador']}
//           />
//         </div>
//       </div>
//       <div className="mt-6 flex gap-6">
//         <div className="flex w-full flex-col gap-2">
//           <label htmlFor="" className="font-semibold">
//             Acesso
//           </label>
//           <Dropdown
//             defaultValue="Login liberado"
//             type="form"
//             options={['Login bloqueado', 'Login liberado']}
//           />
//         </div>

//         <Input
//           label="Cadastro"
//           name="cadastro"
//           type="text"
//           placeholder="00/00/0000"
//           className="w-full"
//           value={editedItem.register}
//           onChange={handleInputChange}
//         />
//         <Input
//           label="Alterado"
//           name="alterado"
//           type="text"
//           placeholder="00/00/0000"
//           className="w-full"
//           value={editedItem.register}
//         />
//       </div>
//       <ButtonSave handleSave={handleSave} />
//     </div>
//   )
// }
