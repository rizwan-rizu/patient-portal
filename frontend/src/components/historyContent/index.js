import React from 'react';
import { Box, Grid,Typography, Button } from '@material-ui/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'


const HistoryContent = ({
    date  ,
    diagnose,
    bloodpressure ,
    temperature ,
    pulserate,
    bloodgulucose,
    medicine,
    type ,
    dosage ,
    usagetime ,
    tests ,
    comments ,
    doctorname ,
    specialization,
    hospital,
}) =>  {

   const printDocument =() => {
        const input = document.getElementById('print-me');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF("p" , "mm","a4");
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'JPEG', 0, 0, width, height);

            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }
    
    return (
        <Box className="popup-content" id="print-me" style={{ }}>
            {/* <Button variant="outlined" onClick={printDocument}></Button> */}
            <Box className="doctor-details">
                <Grid container style={{padding: "10px 25px"}} >
                  <Grid style={{background: "#f7f7f7",width: "100%",padding: "10px"}} item xs={8}>
                    <Typography variant="h6">DR {doctorname}</Typography>
                    <Typography style={{paddingLeft:"10px"}} variant="body1">[ {specialization} ]</Typography>
                    <Typography style={{paddingLeft:"10px"}} variant="body1">[ {hospital} ]</Typography>
                  </Grid>
                  <Grid style={{background: "#f7f7f7",width: "100%",padding: "10px"}} item xs={4}>
                    <Typography style={{textAlign:"right"}} variant="body1">Dated : {date}</Typography>
                  </Grid>
                </Grid>
            </Box>
            <Box className="doctors-review">
                  <Grid container style={{padding: "10px 25px"}} >
                    <Grid  item xs={12} style={{background: "#f7f7f7",width: "100%",padding: "10px"}}>
                      <Typography variant="body1">DIAGNOSE WITH :</Typography>
                    </Grid>
                    <Grid item xs={12} style={{padding:"15px"}} >
                      <Typography variant="subtitle1">
                      [ {diagnose} ]
                      </Typography>
                    </Grid>
                  </Grid>
            </Box>
            <Box className="regular-checkup-details">
                <Grid container style={{padding: "10px 25px"}} >
                  <Grid style={{background: "#f7f7f7",width: "100%",padding: "10px"}} item xs={12}>
                    <Typography variant="body1">REGULAR CHECKUP DETAILS :</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}} >
                    <Typography variant="subtitle1">Blood pressure :</Typography>
                    <Typography variant="subtitle2">[ {bloodpressure} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Temperture :</Typography>
                    <Typography variant="subtitle2">[ {temperature} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Blood Glucose :</Typography>
                    <Typography variant="subtitle2">[ {bloodgulucose} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Pulse Rate :</Typography>
                    <Typography variant="subtitle2">[ {pulserate} ]</Typography>
                  </Grid>
                </Grid>
            </Box>
            <Box className="medication">
                <Grid container style={{padding: "10px 25px"}} >
                  <Grid  item xs={12} style={{background: "#f7f7f7",width: "100%",padding: "10px"}}>
                    <Typography variant="body1">MEDICATIONS :</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}} >
                    <Typography variant="subtitle1">Name :</Typography>
                    <Typography variant="subtitle2">[ {medicine} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Type :</Typography>
                    <Typography variant="subtitle2">[ {type} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Dosage :</Typography>
                    <Typography variant="subtitle2">[ {dosage} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Duration :</Typography>
                    <Typography variant="subtitle2">[ {usagetime} ]</Typography>
                  </Grid>
                </Grid>
            </Box>
            <Box className="laboratory-test">
                <Grid container style={{padding: "10px 25px"}} >
                  <Grid  item xs={12} style={{background: "#f7f7f7",width: "100%",padding: "10px"}}>
                    <Typography variant="body1">LABORATORY TESTS :</Typography>
                  </Grid>
                  <Grid item xs={6} style={{padding:"15px"}} >
                    <Typography variant="subtitle1">Test Name :</Typography>
                    <Typography variant="subtitle2">[ {tests} ]</Typography>
                  </Grid>
                  <Grid item xs={6} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Test Name :</Typography>
                    <Typography variant="subtitle2">[ Blood Complete picture ]</Typography>
                  </Grid>
                </Grid>
            </Box>
            <Box className="doctors-review">
                <Grid container style={{padding: "10px 25px"}} >
                  <Grid  item xs={12} style={{background: "#f7f7f7",width: "100%",padding: "10px"}}>
                    <Typography variant="body1">DOCTOR'S REVIEW :</Typography>
                  </Grid>
                  <Grid item xs={12} style={{padding:"15px"}} >
                    <Typography variant="subtitle1">
                    [ {comments} ]
                    </Typography>
                  </Grid>
                </Grid>
            </Box>
          </Box>
    );
}

export default HistoryContent