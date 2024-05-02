import Layout from "../../Components/Layout";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button";
import "./IncidentAutomobile.module.css";

const IncidentAutomobile = () => {
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
          <h1 className="h-10 text-center">Incident Automobile</h1>
          <div className="flex flex-col">
            <label> Actual Date </label>
            <input
              type="date"
              {...register("actualDate", { required: true })}
            ></input>
            {errors.actualDate?.type === "required" && (
              <p> The field Actual Date is required</p>
            )}
            <label> Date of Incident</label>
            <input
              type="date"
              {...register("dateIncident", { required: true })}
            ></input>
            {errors.dateIncident?.type === "required" && (
              <p> Date of Incident is required</p>
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
            <label>VIN</label>
            <input type="text" {...register("vin", { required: true })}></input>
            {errors.vin?.type === "required" && (
              <p> The field VIN is required</p>
            )}
            <label>
              License State, Please, provide the state where vehicle is
              registered/licensed{" "}
            </label>
            <input
              type="Text"
              {...register("licenseState", { required: true })}
            ></input>
            {errors.licenseState?.type === "required" && (
              <p> The field License state is required</p>
            )}
            <label>Garage State</label>
            <select
              {...register("garageState", { required: true })}
              className="text-black"
            >
              <option value=""></option>
              <option value="PA">PA</option>
              <option value="CR">CR</option>
              <option value="IL">IL</option>
              <option value="BW">BW</option>
              <option value="FL">FL</option>
              <option value="CA">CA</option>
              <option value="SC">SC</option>
              <option value="TX">TX</option>
            </select>
            {errors.garageState?.type === "required" && (
              <p> The field Garage State is required</p>
            )}
            <label>Garage city</label>
            <select
              {...register("garageCity", { required: true })}
              className="text-black"
            >
              <option value=""></option>
              <option value="PA">NEW SALEM</option>
              <option value="OPT">VIDOR</option>
              <option value="TX">MILFORD</option>
              <option value="TX">TINLEY PARK</option>
            </select>
            {errors.garageState?.type === "required" && (
              <p> The field Garage City is required</p>
            )}

            <label>FMV</label>
            <input
              type="number"
              {...register("FMV", { required: true })}
            ></input>
            {errors.FMV?.type === "required" && (
              <p> The field FMV is required</p>
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
              </div>
            )}
          </div>
          <Button />
        </form>
      </Layout>
    </>
  );
};

export default IncidentAutomobile;
