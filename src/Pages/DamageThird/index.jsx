import React from "react";
import Layout from "../../Components/Layout";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button";

const DamageThird = () => {
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
          <h1 className="h-10 text-center">Damage to third Party</h1>
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

            <label>
              Please indicate the company where the incident occurred
            </label>
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

            <label>
              {" "}
              Plese indicate if there were any damages to a non-employee
              individual who was affected
            </label>
            <select
              {...register("damagePerson", { required: true })}
              className="text-black"
            >
              {" "}
              <option value=""></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.damagePerson?.type === "required" && (
              <p> The field Status is required</p>
            )}
            {watch("damagePerson") === "Yes" && (
              <>
                <label> Provide Name and LastName of the person</label>
                <input
                  type="text"
                  className="text-black"
                  {...register("name", { required: true })}
                ></input>
                {errors.name?.type === "required" && (
                  <p> The field name and lastName is required</p>
                )}
                <label> Provide their number contact </label>
                <input
                  type="number"
                  className="text-black"
                  {...register("number", { required: true })}
                ></input>
                {errors.number?.type === "required" && (
                  <p> The field number is required</p>
                )}
              </>
            )}
            <label>
              Plese indicate if there were any damages to automobile or
              equipment mobile of a third party
            </label>
            <select
              {...register("damageEquipment", { required: true })}
              className="text-black"
            >
              {" "}
              <option value=""></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.damageEquipment?.type === "required" && (
              <p> The field Damage equipment is required</p>
            )}

            {watch("damageEquipment") === "Yes" && (
              <>
                <label>
                  In this part detail what happened with the Equipment Mobile.
                  Describe the physical damage, injures, or any type of event
                  that occurred.
                </label>
                <textarea
                  type="text"
                  className="text-black"
                  {...register("physicalDamage", { required: true })}
                ></textarea>
                {errors.physicalDamage?.type === "required" && (
                  <p> The field physical damage is required</p>
                )}
                <label>Attached invoices</label>
                <input
                  htmlFor="file "
                  className="text-black"
                  {...register("attached", { required: true })}
                ></input>
              </>
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
          </div>
          <Button />
        </form>
      </Layout>
    </>
  );
};

export default DamageThird;
