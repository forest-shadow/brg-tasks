import React from 'react';
import {
  Typography,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  Button
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Formik, FormikErrors } from 'formik';
import { makeStyles } from '@material-ui/styles';
import InputMask from 'react-input-mask';

import { useStore } from 'components/utils/StoreProvider';
import { TASK_STATUS } from 'stores/tasks/task';

interface FormFields {
  [index: string]: string;
  name: string;
  description: string;
  priority: string;
  timeToComplete: string;
}

const TaskAddForm = ({ closeTooltip, showNotification }: Props) => {
  const classes = useStyles();
  const {
    tasks: { addTask }
  } = useStore();

  return (
    <>
      <Box mb={2.5}>
        <Typography variant="h6" component="h3">
          Add New Task
        </Typography>
      </Box>
      <Formik
        initialValues={
          {
            name: '',
            description: '',
            priority: '',
            timeToComplete: ''
          } as FormFields
        }
        validate={values => {
          const errors: FormikErrors<any> = {};
          Object.keys(values).forEach((key: string) =>
            !values[key] ? (errors[key] = 'Required') : null
          );
          return errors;
        }}
        onSubmit={({ priority, ...restValues }, { setSubmitting }) => {
          addTask({
            ...restValues,
            id: Math.floor(Math.random() * 100000 + 1),
            added: new Date().toLocaleDateString('en-US', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            }),
            priority: Number(priority),
            status: TASK_STATUS.ACTIVE
          });
          setSubmitting(false);
          closeTooltip();
          showNotification(true);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <TextField
                required
                label="Name"
                variant="filled"
                placeholder="Enter Name"
                autoFocus
                fullWidth
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                InputProps={{ disableUnderline: true }}
              />
              {errors.name && touched.name && (
                <Alert severity="error">{errors.name}</Alert>
              )}
            </Box>

            <Box mb={3}>
              <TextField
                required
                label="Description"
                placeholder="Enter Description"
                multiline
                rows="4"
                variant="filled"
                fullWidth
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                InputProps={{ disableUnderline: true }}
              />
              {errors.description && touched.description && (
                <Alert severity="error">{errors.description}</Alert>
              )}
            </Box>

            <Box mb={3}>
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="filled-priority">Priority</InputLabel>
                <Select
                  required
                  native
                  value={values.priority}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputProps={{
                    name: 'priority',
                    id: 'filled-priority'
                  }}
                  disableUnderline={true}
                  placeholder="Select Priority"
                >
                  <option value="" />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </Select>
              </FormControl>
              {errors.priority && touched.priority && (
                <Alert severity="error">{errors.priority}</Alert>
              )}
            </Box>

            <Box mb={3}>
              <InputMask
                required
                mask="99:59:59"
                maskChar="_"
                formatChars={{
                  '5': '[0-5]',
                  '9': '[0-9]'
                }}
                value={values.timeToComplete}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleBlur}
              >
                {() => (
                  <TextField
                    required
                    type="text"
                    label="Time To Complete"
                    variant="filled"
                    placeholder="Enter Time To Complete"
                    fullWidth
                    name="timeToComplete"
                    InputProps={{ disableUnderline: true }}
                  />
                )}
              </InputMask>

              {errors.timeToComplete && touched.timeToComplete && (
                <Alert severity="error">{errors.timeToComplete}</Alert>
              )}
            </Box>

            <Box display="flex" flexDirection="row-reverse">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
                className={classes.addBtn}
              >
                Add Task
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

interface Props {
  closeTooltip: () => void;
  showNotification: (show: boolean) => void;
}

const useStyles = makeStyles({
  addBtn: {
    color: '#FFFFFF',
    border: '1px solid #0a588c',
    backgroundColor: '#0a588c',

    '&:hover': {
      backgroundColor: '#0a588c',
      borderColor: '#0a588c'
    },

    '&:active': {
      backgroundColor: '#0a588c',
      borderColor: '#0a588c'
    }
  }
});

export default TaskAddForm;
