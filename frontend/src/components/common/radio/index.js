import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {register_action} from '../../../redux/actions'
import {useDispatch , useSelector} from 'react-redux'


const RadioInput = ({
    groupLabel,
    groupName,
    radioArray,
    initialValue

}) => {
  const [value, setValue] = React.useState(initialValue);
  const dispatch = useDispatch()

  const handleChange = event => {
    setValue(event.target.value);
    dispatch(register_action(event.target.value))
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{groupLabel}</FormLabel>
      <RadioGroup aria-label={groupName} name={groupName} value={value} onChange={handleChange} row>

        {
            radioArray.map((item, i) => (
                <FormControlLabel
                    key = {i}
                    value={item.radioVal}
                    control={<Radio size="small" color="default" />}
                    label={item.label}
                    labelPlacement="end"
                />
            ))
        }

      </RadioGroup>
    </FormControl>
  );
}

export default RadioInput