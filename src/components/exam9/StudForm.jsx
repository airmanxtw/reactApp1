import React from "react";
import { useForm } from "react-hook-form";
function StudForm() {
    let { register, handleSubmit, formState: { errors } } = useForm();
    return <form onSubmit={handleSubmit((data) => { console.log(data) })}>
        <label>請輸入學號</label>
        <input {...register("studno", { required: true })}></input>
        {errors.studno && <span>請填寫</span>}
        <input type="submit" value="提交" />
    </form>

}

export default StudForm;