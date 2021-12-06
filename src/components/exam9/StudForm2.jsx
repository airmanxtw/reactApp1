
import { Card, CardContent, Grid, TextField, Input, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";

function StudForm2() {
    
    let { control, handleSubmit,setValue,getValues } = useForm({
        defaultValues:{
            stud:{
                studno:'1234',
                studname:'airmanx'
            }   
        }
    });

    return <div>
        <Card>
            <CardContent>
                {getValues("stud.studno")}
                <Button onClick={()=>setValue("studno","9999")}>click me</Button>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Controller name="stud.studno"
                                control={control}
                                render={({ field }) => <Input {...field} />}>
                            </Controller>
                        </Grid>
                        <Grid item xs={12}>
                            <Controller name="stud.studname"
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