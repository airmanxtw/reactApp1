
import { Card, CardContent, Grid, TextField, Input, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import React, { useEffect, useState } from "react";

function StudForm2(props) {

    let { control, handleSubmit, setValue, getValues } = useForm({
        defaultValues: {
            studno: '1234',
            studname: 'airmanx'

        }
    });
    useEffect(() => {
        let studno = props.studno;
        setValue("", { studno: props.studno, studname: 'ccsu' });
    }, [])

    return <div>
        <Card>
            <CardContent>
                {getValues("studno")}
                <Button onClick={() => setValue("studno", "9999")}>click me</Button>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Controller name="studno"
                                control={control}
                                render={({ field }) => <Input {...field} />}>
                            </Controller>
                        </Grid>
                        <Grid item xs={12}>
                            <Controller name="studname"
                                control={control}
                                render={({ field }) => <Input {...field} />}>
                            </Controller>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    </div>
}

export default StudForm2