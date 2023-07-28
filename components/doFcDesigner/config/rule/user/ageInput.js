import uniqueId from '@form-create/utils/lib/unique';

const label = '年龄';
const name = 'ageInput';

export default {
    icon: 'icon-input',
    label,
    name,
    rule() {
        return {
            type: 'input',
            field: uniqueId(),
            title: label,
            props: {type: "text"},
            temple_code: 'idCardInput',
            validate: [
                {
                  "trigger": "change",
                  "mode": "pattern",
                  "message": "请输入正确的年龄信息",
                  "pattern": "^((1[0-5])|[1-9])?\\d$",
                  "type": "string"
                }
              ],
              "$required": "年龄信息不能为空"
          
        };
    },
    props() {
        return [
            { type: 'inputNumber', field: 'maxlength', title: '文本长度' },
            {
                type: 'select',
                field: 'type',
                title: '文本类型',
                value: 'text',
            },
            {
              type: 'radio', field: 'required', title: '是否必填',  value: '0', options: [
                    {label: '是', value: '1'},
                    {label: '否', value: '0'}
                ]
            }
        ];
    }
};