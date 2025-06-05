import { useForm } from "react-hook-form";
const UserInput = ({ onPremiumCalculated }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let result = await r.json();
    console.log(result);
    onPremiumCalculated(result); 
  };

  return (
    <>
    <div className="container">
      <h1>Benefit Illustration Module</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="DOB">DOB : </label>
        <input {...register("DOB")} type="date" placeholder="Enter Dob" 
           style={{ width: "30%" }}/>
        <br />
        <br />

        <label>Gender : </label><br/><br/>

        <label>
          <input type="radio" value="male" {...register("gender")} /> Male
        </label>

        <label>
          <input type="radio" value="female" {...register("gender")} /> Female
        </label>

        <label>
          <input type="radio" value="other" {...register("gender")} /> Other
        </label>

        <br />
        <br />
        <label htmlFor="">
          Sum Assured:{" "}
          <input
            {...register("sumAssured")}
            type="number"
            placeholder="Enter Sum Assured"
            min="1000"
            max="10000000"
            name="sumAssured"
            id="sumAssured"
            style={{ width: "30%" }}
          />
        </label>
        <br />
        <br />
        <label htmlFor="modelPremium">Model Premium:</label>
        <input
          {...register("modelPremium")}
          type="number"
          placeholder="Enter Model Premium"
          min="10000"
          max="50000"
          name="modelPremium"
          id="modelPremium"
             style={{ width: "35%" }}
        />
        <br />
        <br />
        <label htmlFor="premiumFrequency">Premium Frequency:</label>
        <select id="premiumFrequency" {...register("premiumFrequency")}>
          <option value="yearly">Yearly</option>
          <option value="half-yearly">Half-Yearly</option>
          <option value="monthly">Monthly</option>
        </select>

        <br />
        <br />
        <label htmlFor="pt">Policy Term :</label>
        <input
          {...register("pt")}
          type="number"
          placeholder="Enter pt"
          id="pt"
          name="pt"
          min="10"
          max="20"
             style={{ width: "30%" }}
        />
        <br />
        <br />
        <label htmlFor="ppt">Premium Paying Term :</label>
        <input
          {...register("ppt")}
          type="number"
          id="ppt"
          name="ppt"
          placeholder="Enter ppt"
          min="5"
          max="10"
             style={{ width: "30%" }}
        />
        <br />
        <br />
        <div className="btn">
        <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </>
  );
};

export default UserInput;
