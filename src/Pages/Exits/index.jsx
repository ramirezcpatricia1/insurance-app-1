import Layout from "../../Components/Layout";
//import SelectEquipment from "../../Components/checkboxEquipment";
//import SelectEquipment from "../../Components/SelectedEquipment";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button";
import "./Exits.module.css";

//function Exits() {

const Exits = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <Layout>
        <form onSubmit={onSubmit} className="ml-20 relative">
          <h1 className="h-10 text-center">
            {" "}
            Exits "Equipment Outbound Form"{" "}
          </h1>
          {/*<SelectEquipment />*/}
          <div className="flex flex-col">
            <label> Actual Date </label>
            <input
              type="date"
              {...register("actualDate", { required: true })}
            ></input>
            {errors.actualDate?.type === "required" && (
              <p> The field Actual Date is required</p>
            )}

            <label> EquipmentType</label>
            <input
              type="text"
              {...register("EquipmentType", { required: true })}
            ></input>
            {errors.EquipmentType?.type === "required" && (
              <p> The field Equipment Type is required</p>
            )}

            <label>Year</label>
            <input
              type="number"
              {...register("year", { required: true })}
            ></input>
            {errors.year?.type === "required" && (
              <p> The field Year is required</p>
            )}

            <label>Make</label>
            <input
              type="text"
              {...register("make", { required: true })}
            ></input>
            {errors.make?.type === "required" && (
              <p> The field Make is required</p>
            )}

            <label>Model</label>
            <input
              type="text"
              {...register("model", { required: true })}
            ></input>
            {errors.model?.type === "required" && (
              <p> The field Model is required</p>
            )}

            <label>Equipment Number</label>
            <input
              type="text"
              {...register("equipment_number", { required: true })}
            ></input>
            {errors.equipment_number?.type === "required" && (
              <p> The field Equipment Number is required</p>
            )}

            <label>PO_SAP </label>
            <input
              type="number"
              {...register("PO_SAP", { required: true })}
            ></input>
            {errors.PO_SAP?.type === "required" && (
              <p> The field PO_SAP is required</p>
            )}

            <label>FMV</label>
            <input
              type="number"
              {...register("FMV", { required: true })}
            ></input>
            {errors.FMV?.type === "required" && (
              <p> The field FMV is required</p>
            )}

            <label>Plant</label>
            <select
              {...register("Plant", { required: true })}
              className="text-black"
            >
              <option value=""></option>
              <option value="OPT">OPT</option>
              <option value="PA">PA</option>
              <option value="CR">CR</option>
              <option value="IL">IL</option>
              <option value="BW">BW</option>
              <option value="FL">FL</option>
              <option value="CA">CA</option>
              <option value="SC">SC</option>
              <option value="TX">TX</option>
            </select>
            {errors.Plant?.type === "required" && (
              <p> The field Plant is required</p>
            )}

            <label>Insured Schedule </label>
            <select
              {...register("InsuredSchedule", { required: true })}
              className="text-black"
            >
              <option value=""></option>
              <option value="Optimus">Optimus</option>
              <option value="WMC">WMC</option>
              <option value="StellTech">Steeltech</option>
            </select>
            {errors.InsuredSchedule?.type === "required" && (
              <p> The field Insured Schedule is required</p>
            )}

            <label>Status</label>
            <select
              {...register("status", { required: true })}
              className="text-black"
            >
              <option value=""></option>
              <option value="Leased">Leased</option>
              <option value="Owned">Owned</option>
              <option value="Rented">Rented</option>
            </select>
            {errors.status?.type === "required" && (
              <p> The field Status is required</p>
            )}
            {watch("status") === "Leased" && (
              <div>
                <label>Leased Start Date</label>
                <input
                  type="date"
                  {...register("leasedStartDate", { required: true })}
                ></input>
                {errors.leasedStartDate?.type === "required" && (
                  <p> The field leased start date is required</p>
                )}
                <label>Leased End Date</label>
                <input
                  type="date"
                  {...register("leasedEndDate", { required: true })}
                ></input>
                {errors.leasedEndDate?.type === "required" && (
                  <p> The field leased End Date is required</p>
                )}

                <label>Please, provide the name of the provider</label>
                <input
                  type="date"
                  {...register("nameProvider", { required: true })}
                ></input>

                {errors.nameProvider?.type === "required" && (
                  <p> The field name of provider is required</p>
                )}
                <label>Provide the name of the financial company</label>
                <input
                  type="text"
                  {...register("financialCompany", { required: true })}
                ></input>
                {errors.financialCompany?.type === "required" && (
                  <p> The field financial Company is required</p>
                )}
                <label>Provide the leasing Contract number</label>
                <input
                  type="text"
                  {...register("leasingContractNumber", { required: true })}
                ></input>
                {errors.financialCompany?.type === "required" && (
                  <p> The field Leasing Contract Number is required</p>
                )}
                <label htmlFor="file ">Please, attach the contract</label>
                <input type="file"></input>
              </div>
            )}

            {watch("status") === "Rented" && (
              <div>
                <label>Rented Start Date</label>
                <input
                  type="date"
                  {...register("rentedStartDate", { required: true })}
                ></input>
                <label>Rented End Date</label>
                <input
                  type="date"
                  {...register("rentedEndDate", { required: true })}
                ></input>
                <label>Please, provide the name of the provider</label>
                <input
                  type="date"
                  {...register("nameProvider", { required: true })}
                ></input>

                {errors.nameProvider?.type === "required" && (
                  <p> The field name of provider is required</p>
                )}
                <label>Please, provide the PR cost Center Name</label>
                <input
                  type="text"
                  {...register("costCenterName", { required: true })}
                ></input>

                {errors.nameProvider?.type === "required" && (
                  <p> The field PR cost center name is required</p>
                )}
                <label htmlFor="file ">Please, attach the contract</label>
                <input type="file"></input>
              </div>
            )}

            <label>Please provide your Id</label>
            <input type="text" {...register("Id", { required: true })}></input>
            {errors.Id?.type === "required" && <p> The field Id is required</p>}

            <label>Please, Provide your email</label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "El e-mail no es valido",
                },
              })}
            ></input>
            {errors.email?.type === "required" && (
              <p> The field email is required</p>
            )}

            <label className="h-10 flex">
              Will the previously registered equipment be replaced?
            </label>
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <Button />
        </form>
      </Layout>
    </>
  );
};
export default Exits;
