
import { Card, CardContent, Grid, TextField, Input, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import React, { useEffect, useState } from "react";

function StudForm2(props) {

    let { control, handleSubmit, setValue, getValues, formState: { errors } } = useForm({
        defaultValues: {
            studno: '',
            studname: ''
        }
    });
    useEffect(() => {
        let studno = props.studno;
    }, [])

    let test = () => {
        let x = errors.studno;
        debugger;
        return 'hello';
    }

    const onSubmit = data => {
        //debugger;
        console.log(data)
    };
    const onError = (errors, e) => {
        //debugger;
        let t={};
        let t2=t?.studno;
        //debugger;

        console.log(errors, e)
    };

    const check1=(errors)=>{
        return !!errors.studno?'請填寫':' ';
    }

    return <div>
        <Card>
            <CardContent>
                {getValues("studno")}

                <Button onClick={() => setValue("studno", "9999")}>click me</Button>
                <form onSubmit={handleSubmit(onSubmit,onError)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Controller name="studno"
                                control={control}
                                rules={{ required: true,minLength:10 }}
                                render={({ field }) => <TextField {...field} error={errors.studno && true} margin="normal" helperText={check1(errors)}/>}
                                >
                            </Controller>
                        </Grid>
                        <Grid item xs={12}>
                            <Controller name="studname"
                                control={control}
                                render={({ field }) => <Input {...field} />}>
                            </Controller>
                        </Grid>
                    </Grid>
                    <input type="submit"  />
                </form>
            </CardContent>
        </Card>
    </div>
}

export default StudForm2