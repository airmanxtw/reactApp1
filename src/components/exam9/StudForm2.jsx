
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

    const onSubmit = data => console.log(data);

    return <div>
        <Card>
            <CardContent>
                {getValues("studno")}
                <Button onClick={() => setValue("studno", "9999")}>click me</Button>
                <form onSubmit={handleSubmit((data) => { console.log(data) })}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Controller name="studno"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <Input  {...field} error={errors.studno && true} />}>
                            </Controller>

                        </Grid>
                        <Grid item xs={12}>
                            <Controller name="studname"
                                control={control}
                                render={({ field }) => <Input {...field} />}>
                            </Controller>
                        </Grid>
                    </Grid>
                    <input type="submit" />
                </form>
            </CardContent>
        </Card>
    </div>
}

export default StudForm2