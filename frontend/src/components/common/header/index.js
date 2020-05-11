import React from 'react'
import { Typography, Grid} from '@material-ui/core'


const PageHeader = ({
  title,
  heading,
  headingData
}) => {
  let text = "Patient ID"
  return (
    <div className="page-header">
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h1">{title}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{textAlign: "right"}} variant="h1">{heading} {headingData}</Typography>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default PageHeader;