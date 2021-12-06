
import { Card, CardContent, Grid, TextField, Input } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";

function StudForm2() {
    let [stud, setStud] = useState({
        studno: '321', studname: 'xnamria'
    });
    let { control, handleSubmit } = useForm();

    return <div>
        <Card>
            <CardContent>
                <Input value={stud.studno} onInput={(e) =>  setStud({ ...stud, studno: e.value }) }></Input>
                <form>
                    <Grid container spacing={2}>
                        {/* <Grid item xs={12}>
                            <Controller name="studno"
                                control={control}
                                defaultValue={stud.studno}
                                render={({ field }) => <Input {...field} />}>
                            </Controller>
                        </Grid> */}
                        <Grid item xs={12}>
                            <Controller name="studname"
                                control={control}
                                defaultValue={stud.studname}
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