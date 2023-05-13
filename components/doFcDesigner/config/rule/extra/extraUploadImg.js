import uniqueId from '@form-create/utils/lib/unique';

const label = '图片上传';
const name = 'extraUploadImg';
// 还未处理
export default {
    icon: 'icon-upload',
    label,
    name,
    rule() {
        return {
            type: 'upload',
            field: uniqueId(),
            title: label,
            info: '',
            props: {
                action: '',
                onSuccess(res, file) {
                    file.url = res.data.url;
                }
            }
        };
    },
    props() {
        return [
            {
                type: 'select',
                field: 'uploadType',
                title: '上传类型',
                value: 'image',
                options: [
                    { label: '图片', value: 'image' },
                    {
                        label: '文件',
                        value: 'file'
                    }
                ]
            },
            { type: 'input', field: 'name', title: '上传的文件字段名' },
            {
                type: 'switch',
                field: 'withCredentials',
                title: '支持发送 cookie 凭证信息'
            },
            // { type: 'input', field: 'accept', title: '接受上传的文件类型（thumbnail-mode 模式下此参数无效）' },
            {
                type: 'switch',
                field: 'autoUpload',
                title: '是否在选取文件后立即进行上传',
                value: true
            },
            {
                type: 'switch',
                field: 'disabled',
                title: '是否禁用'
            },
            {
                type: 'inputNumber',
                field: 'limit',
                title: '最大允许上传个数'
            }
        ];
    }
};