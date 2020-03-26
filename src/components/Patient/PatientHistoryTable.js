import React from 'react';
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import color from '@material-ui/core/colors/amber';
import { light } from '@material-ui/core/styles/createPalette';



  const PatientHistoryList = () => {
    const tableIcons = {
      Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
      Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
      DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
      Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
      Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
      ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
      ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    const columns=[
      {title: 'Disease', field:'disease'},
      {title: 'Last checkup date', field:'last_checkup_date'},
      {title: 'Hospital', field:'hospital'}
    ]
    const RowData=[
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Ali Medical Islambad'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Akhter Medical Islambad'},
      {disease:'Heart', last_checkup_date: '22 October 2019', hospital:'Shifa Internation'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Kalsoom Internation'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'PIMS'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Ali Medical Islambad'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Akhter Medical Islambad'},
      {disease:'Heart', last_checkup_date: '22 October 2019', hospital:'Shifa Internation'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Kalsoom Internation'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'PIMS'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Ali Medical Islambad'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Akhter Medical Islambad'},
      {disease:'Heart', last_checkup_date: '22 October 2019', hospital:'Shifa Internation'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Kalsoom Internation'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'PIMS'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Ali Medical Islambad'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Akhter Medical Islambad'},
      {disease:'Heart', last_checkup_date: '22 October 2019', hospital:'Shifa Internation'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Kalsoom Internation'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'PIMS'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Ali Medical Islambad'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Akhter Medical Islambad'},
      {disease:'Heart', last_checkup_date: '22 October 2019', hospital:'Shifa Internation'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Kalsoom Internation'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'PIMS'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Ali Medical Islambad'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Akhter Medical Islambad'},
      {disease:'Heart', last_checkup_date: '22 October 2019', hospital:'Shifa Internation'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'Kalsoom Internation'},
      {disease:'High BP', last_checkup_date: '23 November 2019', hospital:'PIMS'},

    ]
    return(
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={RowData}
        title="Patient History Records"
        options={{
          search: true,
          selection: true,
          rowStyle: {
            backgroundColor: '#f7f7f7',
          }
        }}
      />
    )
  }
export default PatientHistoryList
