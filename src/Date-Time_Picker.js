import React from 'react';
import MaterialInput from '../../../Widgets/FormElements/material/Input';
// import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
// import ExportSharp from '../../../Assets/exportSharp.svg';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Student from '../../../Assets/student.png';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import GroupFile from '../../../Assets/GroupFile.png';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import MButton from 'Widgets/FormElements/material/Button';
import Checkbox from '@mui/material/Checkbox';
import DialogModal from 'Widgets/FormElements/material/DialogModal';
import LeaveSlider from '../design/LeaveSlider';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import PendingApplications from './FacultyApproval\u2028Leave/PendingApplications';
import FacultyApprovalPopup from './facultyApprovalPopup/facultyApprovalPopup';
import { Popover, TextField } from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const StudentLeave = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleModal = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };

  const [date , setDate] = React.useState({startDate:new Date() , startTime:null , endDate:[] , endTime:null})

  console.log(date , "date")

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState([]);
  const onChange = (dates) => {
    const [start, end] = dates;
    setDate(start);
    setDate(end);
    console.log(dates, 'dates');
  };

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#FFFFFF',
      color: 'rgba(0, 0, 0, 0.87)',
      minWidth: 280,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
      boxShadow: '0px 4px 6px 2px rgba(0, 0, 0, 0.25)',
      padding: 12,
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [value, setValue] = React.useState(null);
  // const [value1, setValue1] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="mt-0 mb-2 ml-3">
      <div>
        <LeaveSlider />
      </div>
      {/* <div className="d-flex align-items-center mb-2">
        <p className="mb-0 f-20"> Leave Applied</p>

        <div className="ml-auto d-flex align-items-center">
          <MaterialInput
            elementType={'materialSearch'}
            placeholder={'Search'}
            id={'#rowReverse'}
            // value={filters.get('search', '')}
            // changed={(e) => handleFilters('search', e)}
          />
          <FilterListOutlinedIcon className="ml-4 remove_hover" />
          <img
            src={ExportSharp}
            alt="export data"
            className="ml-4 remove_hover"
          />
        </div>
      </div> */}
      <Divider />
      <div>
        <PendingApplications />
      </div>
      <div className="mb-2">
        <p className="mb-3 mt-3 bold">1 February 2022 - 7 February 2022</p>
        <FacultyApprovalPopup />

        <div>
          <TextField
            onClick={handleClick}
            placeholder="Date and time range"
            variant="outlined"
            InputProps={{
              endAdornment: <CalendarTodayIcon position="end" />
            }}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="d-flex mt-3">
                  <ReactDatePicker
                    className="react-datepicker-width"
                    selected={date.startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                  />

                  <div className="px-3">
                    <div className="mt-5">
                      <div className="text-muted">START DATE & SESSION</div>
                      <div>
                        <span className="span-size text-primary fs-3">
                          {moment(startDate).format('DD')}
                        </span>{' '}
                        &nbsp;
                        {moment(startDate).format('MMMM YYYY')}
                      </div>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker className='timePicker'
                        components={{
                          OpenPickerIcon: ArrowDropDownIcon
                        }}
                          value={date.startTime}
                          onChange={(newValue) => {
                            setDate(newValue);
                          }}
                          renderInput={(params) => <TextField  sx= {{ width: '20ch'}}  size="small"    {...params} />}
                        />
                      </LocalizationProvider>
                    </div>
                    <div className="mt-3">
                      <div className="text-muted">END DATE & SESSION</div>
                      <div>
                        <span className="span-size text-primary fs-3">
                          {endDate ? moment(endDate).format('DD') : ''}
                        </span>{' '}
                        &nbsp;
                        {endDate ? moment(endDate).format('MMMM YYYY'): ''}
                      </div>
                      
                      <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <TimePicker 
                        components={{
                          OpenPickerIcon: ArrowDropDownIcon
                        }}
                          value={date.value1}
                          onChange={(newValue) => {
                            setDate(newValue);
                            console.log(newValue,"newValue")
                          }}
                          renderInput={(params) => <TextField sx= {{ width: '20ch'}} size="small"   {...params} />}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>
                </div>
              </LocalizationProvider>
              <hr />
              <div className="d-flex justify-content-end pb-2 px-2">
                <div className="px-2">
                  <MButton color={'lightBlack'} variant="text">Cancel</MButton>
                </div>
                <div>
                  <MButton color={'dutyButton'} variant="contained" onClick={handleModalClose}>
                    Apply
                  </MButton>
                </div>
              </div>
            </div>
          </Popover>
        </div>

        <div className="studentLeaveList d-flex">
          <Avatar alt="Student" src={Student} sx={{ width: 56, height: 56 }} />

          <div className="w-100 pl-3">
            <div className="d-flex align-items-center">
              <div className="">
                <div className="d-flex align-items-center">
                  <span className="bold">Raju Sharma </span>{' '}
                  <span className="ml-1">(Section 3) </span>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <div>
                          <div
                            color="inherit"
                            className="font-weight-bold f-16"
                          >
                            More Details:
                          </div>
                          <div className="d-flex align-items-center f-16">
                            <div className="digi-666 w-50 text-right mr-1">
                              Year
                            </div>
                            <div className="mr-1">:</div>
                            <div>2nd Year</div>
                          </div>
                          <div className="d-flex align-items-center f-16">
                            <div className="digi-666 w-50 text-right mr-1">
                              Level
                            </div>
                            <div className="mr-1">:</div>
                            <div>Level 2</div>
                          </div>
                          <div className="d-flex align-items-center f-16">
                            <div className="digi-666 w-50 text-right mr-1">
                              Leave Applied by
                            </div>
                            <div className="mr-1">:</div>
                            <div>Faculty Name</div>
                          </div>
                          <div className="d-flex align-items-center f-16">
                            <div className="digi-666 w-50 text-right mr-1">
                              Courses Affected
                            </div>
                            <div className="mr-1">:</div>
                            <div>Maths, Science</div>
                          </div>
                        </div>
                      </React.Fragment>
                    }
                  >
                    <p className="ml-2 pt-2 mb-0">
                      <ErrorOutlineOutlinedIcon
                        className="remove_hover"
                        fontSize="small"
                      />{' '}
                    </p>
                  </HtmlTooltip>
                  <img src={GroupFile} alt="file" className="pt-0 pl-2 icon" />
                </div>
                <p className="mb-0 f-15 text-naturalGray">
                  {' '}
                  Program 1 Name Here
                </p>
                <div className="d-flex align-items-center pt-1">
                  <InsertInvitationRoundedIcon className="remove_hover" />
                  <span className="ml-2 f-14">2/2/22 (12:00PM) </span> {'-'}
                  <span className="ml-2 f-14">3/2/22 (4:00 PM) </span>
                </div>
              </div>

              <div className="ml-auto">
                <MButton
                  variant={'contained'}
                  size={'large'}
                  color={'RejectButton'}
                  className={'mr-2'}
                  clicked={handleModal}
                >
                  Reject
                </MButton>
                <MButton
                  variant={'contained'}
                  size={'large'}
                  color={'ApproveButton'}
                >
                  Approve
                </MButton>
              </div>
            </div>
            <p className="mb-0 pt-2 text-justify">
              {' '}
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system
            </p>
          </div>
        </div>

        <div className="studentLeaveList d-flex">
          <Avatar alt="Student" src={Student} sx={{ width: 56, height: 56 }} />

          <div className="w-100 pl-3">
            <div className="d-flex align-items-center">
              <div className="">
                <div className="d-flex align-items-center">
                  <span className="bold">Raju Sharma </span>{' '}
                  <span className="ml-1">(Section 3) </span>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <div>
                          <div
                            color="inherit"
                            className="font-weight-bold f-16"
                          >
                            More Details:
                          </div>
                          <div className="d-flex align-items-center f-16">
                            <div className="digi-666 w-50 text-right mr-1">
                              Year
                            </div>
                            <div className="mr-1">:</div>
                            <div>2nd Year</div>
                          </div>
                          <div className="d-flex align-items-center f-16">
                            <div className="digi-666 w-50 text-right mr-1">
                              Level
                            </div>
                            <div className="mr-1">:</div>
                            <div>Level 2</div>
                          </div>
                          <div className="d-flex align-items-center f-16">
                            <div className="digi-666 w-50 text-right mr-1">
                              Leave Applied by
                            </div>
                            <div className="mr-1">:</div>
                            <div>Faculty Name</div>
                          </div>
                          <div className="d-flex align-items-center f-16">
                            <div className="digi-666 w-50 text-right mr-1">
                              Courses Affected
                            </div>
                            <div className="mr-1">:</div>
                            <div>Maths, Science</div>
                          </div>
                        </div>
                      </React.Fragment>
                    }
                  >
                    <p className="ml-2 pt-2 mb-0">
                      <ErrorOutlineOutlinedIcon
                        className="remove_hover"
                        fontSize="small"
                      />{' '}
                    </p>
                  </HtmlTooltip>
                  <img src={GroupFile} alt="file" className="pt-0 pl-2 icon" />
                  <MButton
                    variant={'contained'}
                    size={'small'}
                    color={'warningNew2'}
                    className="statusButton_inner ml-2"
                  >
                    Warning 2
                  </MButton>
                </div>
                <p className="mb-0 f-15 text-naturalGray">
                  {' '}
                  Program 1 Name Here
                </p>
                <div className="d-flex align-items-center pt-1">
                  <InsertInvitationRoundedIcon className="remove_hover" />
                  <span className="ml-2 f-14">2/2/22 (12:00PM) </span> {'-'}
                  <span className="ml-2 f-14">3/2/22 (4:00 PM) </span>
                </div>
              </div>

              <div className="ml-auto">
                <MButton
                  variant={'contained'}
                  size={'large'}
                  color={'RejectButton'}
                  className={'mr-2'}
                >
                  Reject
                </MButton>
                <MButton
                  variant={'contained'}
                  size={'large'}
                  color={'ApproveButton'}
                >
                  Approve
                </MButton>
              </div>
            </div>
            <p className="mb-0 pt-2 text-justify">
              {' '}
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system
            </p>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <p className="mb-3 mt-3 bold">24 January 2022 - 31 January 2022</p>

        <div className="studentLeaveList d-flex">
          <div className="mr-2">
            <Checkbox
              defaultChecked
              sx={{ '& .MuiSvgIcon-root': { fontSize: 27 } }}
              className="m-0"
            />
          </div>
          <Avatar alt="Student" src={Student} sx={{ width: 56, height: 56 }} />

          <div className="w-100 pl-3">
            <div className="d-flex align-items-center">
              <div className="">
                <div className="d-flex align-items-center">
                  <span className="bold">Raju Sharma </span>{' '}
                  <span className="ml-1">(Section 3) </span>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <div>
                          <div
                            color="inherit"
                            className="font-weight-bold f-16"
                          >
                            More Details:
                          </div>
                          <div className="d-flex align-items-center f-16">
                            <div className="digi-666 w-50 text-right mr-1">
                              Year
                            </div>
                            <div className="mr-1">:</div>
                            <div>2nd Year</div>
                          </div>
                          <div className="d-flex align-items-center f-16">
                            <div className="digi-666 w-50 text-right mr-1">
                              Level
                            </div>
                            <div className="mr-1">:</div>
                            <div>Level 2</div>
                          </div>
                          <div className="d-flex align-items-center f-16">
                            <div className="digi-666 w-50 text-right mr-1">
                              Leave Applied by
                            </div>
                            <div className="mr-1">:</div>
                            <div>Faculty Name</div>
                          </div>
                          <div className="d-flex align-items-center f-16">
                            <div className="digi-666 w-50 text-right mr-1">
                              Courses Affected
                            </div>
                            <div className="mr-1">:</div>
                            <div>Maths, Science</div>
                          </div>
                        </div>
                      </React.Fragment>
                    }
                  >
                    <p className="ml-2 pt-2 mb-0">
                      <ErrorOutlineOutlinedIcon
                        className="remove_hover"
                        fontSize="small"
                      />{' '}
                    </p>
                  </HtmlTooltip>
                  <img src={GroupFile} alt="file" className="pt-0 pl-2 icon" />
                </div>
                <p className="mb-0 f-15 text-naturalGray">
                  {' '}
                  Program 1 Name Here
                </p>
                <div className="d-flex align-items-center pt-1">
                  <InsertInvitationRoundedIcon className="remove_hover" />
                  <span className="ml-2 f-14">2/2/22 (12:00PM) </span> {'-'}
                  <span className="ml-2 f-14">3/2/22 (4:00 PM) </span>
                </div>
              </div>

              <div className="ml-auto">
                <MButton
                  variant={'contained'}
                  size={'large'}
                  color={'RejectButton'}
                  className={'mr-2'}
                >
                  Reject
                </MButton>
                <MButton
                  variant={'contained'}
                  size={'large'}
                  color={'ApproveButton'}
                >
                  Approve
                </MButton>
              </div>
            </div>
            <p className="mb-0 pt-2 text-justify">
              {' '}
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system
            </p>
          </div>
        </div>
      </div>

      <div className="studentLeaveList d-flex">
        <Avatar alt="Student" src={Student} sx={{ width: 56, height: 56 }} />

        <div className="w-100 pl-3">
          <div className="d-flex align-items-center">
            <div className="">
              <div className="d-flex align-items-center">
                <span className="bold">Raju Sharma </span>{' '}
                <span className="ml-1">(Section 3) </span>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <div>
                        <div color="inherit" className="font-weight-bold f-16">
                          More Details:
                        </div>
                        <div className="d-flex align-items-center f-16">
                          <div className="digi-666 w-50 text-right mr-1">
                            Year
                          </div>
                          <div className="mr-1">:</div>
                          <div>2nd Year</div>
                        </div>
                        <div className="d-flex align-items-center f-16">
                          <div className="digi-666 w-50 text-right mr-1">
                            Level
                          </div>
                          <div className="mr-1">:</div>
                          <div>Level 2</div>
                        </div>
                        <div className="d-flex align-items-center f-16">
                          <div className="digi-666 w-50 text-right mr-1">
                            Leave Applied by
                          </div>
                          <div className="mr-1">:</div>
                          <div>Faculty Name</div>
                        </div>
                        <div className="d-flex align-items-center f-16">
                          <div className="digi-666 w-50 text-right mr-1">
                            Courses Affected
                          </div>
                          <div className="mr-1">:</div>
                          <div>Maths, Science</div>
                        </div>
                      </div>
                    </React.Fragment>
                  }
                >
                  <p className="ml-2 pt-2 mb-0">
                    <ErrorOutlineOutlinedIcon
                      className="remove_hover"
                      fontSize="small"
                    />{' '}
                  </p>
                </HtmlTooltip>
                {/* <img src={GroupFile} alt="file" className="pt-0 pl-2 icon" /> */}
              </div>
              <p className="mb-0 f-15 text-naturalGray"> Program 1 Name Here</p>
              <p className="mb-1 digi-font-normal pt-2">
                {' '}
                Absence Percentage: 12% |{' '}
                <span className="text-green mb-0">Warning Acknowledged</span>
              </p>
            </div>

            <div className="ml-auto">
              <MButton
                variant={'contained'}
                size={'medium'}
                color={'lightBlack'}
              >
                schedule a meeting
              </MButton>
            </div>
          </div>
        </div>
      </div>

      <div className="studentLeaveList d-flex">
        <Avatar alt="Student" src={Student} sx={{ width: 56, height: 56 }} />

        <div className="w-100 pl-3">
          <div className="d-flex align-items-center">
            <div className="">
              <div className="d-flex align-items-center">
                <span className="bold">Raju Sharma </span>{' '}
                <span className="ml-1">(Section 3) </span>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <div>
                        <div color="inherit" className="font-weight-bold f-16">
                          More Details:
                        </div>
                        <div className="d-flex align-items-center f-16">
                          <div className="digi-666 w-50 text-right mr-1">
                            Year
                          </div>
                          <div className="mr-1">:</div>
                          <div>2nd Year</div>
                        </div>
                        <div className="d-flex align-items-center f-16">
                          <div className="digi-666 w-50 text-right mr-1">
                            Level
                          </div>
                          <div className="mr-1">:</div>
                          <div>Level 2</div>
                        </div>
                        <div className="d-flex align-items-center f-16">
                          <div className="digi-666 w-50 text-right mr-1">
                            Leave Applied by
                          </div>
                          <div className="mr-1">:</div>
                          <div>Faculty Name</div>
                        </div>
                        <div className="d-flex align-items-center f-16">
                          <div className="digi-666 w-50 text-right mr-1">
                            Courses Affected
                          </div>
                          <div className="mr-1">:</div>
                          <div>Maths, Science</div>
                        </div>
                      </div>
                    </React.Fragment>
                  }
                >
                  <p className="ml-2 pt-2 mb-0">
                    <ErrorOutlineOutlinedIcon
                      className="remove_hover"
                      fontSize="small"
                    />{' '}
                  </p>
                </HtmlTooltip>
                {/* <img src={GroupFile} alt="file" className="pt-0 pl-2 icon" /> */}
              </div>
              <p className="mb-0 f-15 text-naturalGray"> Program 1 Name Here</p>
              <p className="mb-1 digi-font-normal pt-2">
                {' '}
                Absence Percentage: 12% |{' '}
                <span className="text-red mb-0">Warning Acknowledged</span>
              </p>
            </div>

            <div className="ml-auto">
              <MButton
                variant={'contained'}
                size={'medium'}
                color={'lightBlack'}
              >
                schedule a meeting
              </MButton>
            </div>
          </div>
        </div>
      </div>

      <DialogModal
        maxWidth="md"
        fullWidth="true"
        onClose={handleModalClose}
        aria-labelledby="customized-dialog-title"
        show={openModal}
      >
        <div className="m-3 f-17 bold">Confirmation</div>
        <hr />
        <div className="pl-3 pr-3 pb-3">
          <p className="mb-3 pt-2 text-justify">
            {' '}
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system
          </p>

          <MaterialInput
            elementType={'materialInput'}
            placeholder={'Enter your comment'}
            label={'Comment'}
            labelclass={'bold mb-1'}
            id={'newInput'}
          />
        </div>
        <hr />
        <div className="d-flex justify-content-end  container pb-3">
          <MButton
            variant={'outlined'}
            size={'large'}
            color={'lightGray'}
            clicked={handleModalClose}
            className={'mr-2'}
          >
            Cancel
          </MButton>

          <MButton
            variant={'contained'}
            size={'large'}
            color={'RejectButton'}
            className={'mr-2'}
            clicked={handleModalClose}
          >
            Reject
          </MButton>
        </div>
      </DialogModal>
    </div>
  );
};
