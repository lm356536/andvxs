import radio from './rule/radio';
import checkbox from './rule/checkbox';
import card from './rule/card';
import input from './rule/input';
import inputPassword from './rule/inputPassword';
import inputTextArea from './rule/inputTextArea';
import number from './rule/number';
import select from './rule/select';
import _switch from './rule/switch';
import slider from './rule/slider';
import time from './rule/time';
import timeRangePicker from './rule/timeRangePicker';
import date from './rule/date';
import dateRangePicker from './rule/dateRangePicker';
import rate from './rule/rate';
import row from './rule/row';
import divider from './rule/divider';
import cascader from './rule/cascader';
// import upload from './rule/upload';
import transfer from './rule/transfer';
import tree from './rule/tree';
import alert from './rule/alert';
import span from './rule/span';
import space from './rule/space';
import button from './rule/button';
// import editor from './rule/editor';
import progress from './rule/progress';
import hidden from './rule/hidden';
import tab from './rule/tab';
import group from './rule/group';
import table from './rule/table';

import extraInput from './rule/extra/extraInput'
import extraArea from './rule/extra/extraArea'
import extraRadio from './rule/extra/extraRadio'
import extraCheckbox from './rule/extra/extraCheckbox'
import extraUploadFile from './rule/extra/extraUploadFile'
import extraUploadImg from './rule/extra/extraUploadImg'
import extraMutipleSelect from './rule/extra/extraMutipleSelect';
import extraSelect from './rule/extra/extraSelect';
import extraRate from './rule/extra/extraRate';
import extraDatePicker from './rule/extra/extraDatePicker'

import userNameInput from './rule/user/userNameInput'
import sexRadio from './rule/user/sexRadio'
import ageInput from './rule/user/ageInput'
import phoneInput from './rule/user/phoneInput'
import callInput from './rule/user/callInput'
import mailInput from './rule/user/mailInput'
import idCardInput from './rule/user/idCardInput'
export default function createMenu() {
    return [
        {
            name: 'main',
            title: '基础字段',
            list: [
                extraInput,
                extraArea,
                extraRadio,
                extraCheckbox,
                extraSelect,
                extraMutipleSelect,
                extraUploadFile,
                extraUploadImg,
                extraRate,
                extraDatePicker
        
            ]
            // list: [
            //     extraInput,
            //     input, inputPassword, inputTextArea,
            //     number, radio, checkbox,
            //     date, dateRangePicker, select,
            //     time, timeRangePicker, _switch,
            //     slider, rate, cascader,
            //     transfer, tree, hidden
            // ]
        },
        {
            name: 'main',
            title: '常用字段',
            list: [
                userNameInput,
                sexRadio,
                ageInput,
                phoneInput,
                callInput,
                mailInput,
                idCardInput
            ]
        },
        // {
        //     name: 'aide',
        //     title: '辅助组件',
        //     list: [
        //         alert, button, span, divider, progress
        //     ]
        // },
        // {
        //     name: 'layout',
        //     title: '布局组件',
        //     list: [
        //         row, space, group, table, card, tab
        //     ]
        // },
    ];
}