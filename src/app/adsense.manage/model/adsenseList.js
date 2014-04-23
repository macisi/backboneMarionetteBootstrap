/**
 * Created by biangang on 2014/4/22.
 */
define(["backbone"], function(Backbone){
    "use strict";

    var RoleList = Backbone.Model.extend({
        defaults: {
            id: "",
            name: "", //�������
            startDate: "", //Ͷ�ſ�ʼʱ��
            endDate: "", //Ͷ�Ž���ʱ��
            unitPrice: "", //ÿ�������
            budget: "", //���Ԥ��
            count: "",//�ع����
            views: "",//�ع��û���
            click: "",//�����
            payed: "",//�Ѹ�����
            ad_status: "",//���״̬
            audit_status: "",//���״̬
            remark: "",//��ע
            rank: "",//��������

            "position": "",//λ��
            "city": "",//����
            "gender": "",//�Ա�
            "industry": "",//��ҵ
            "category": "",//Ʒ��
            "group": "",//��Ⱥ
            "releaseDate": "",//�����������
            "adv_name": "",//another������� �Ƿ������Ĺ��������ͬ
            "adv_title": "",//������
            "adv_desc": "",//�������
            "adv_img": ""//���ͼƬԤ����ַ
        },
        initialize: function(){
        }
    });

    return RoleList;

});