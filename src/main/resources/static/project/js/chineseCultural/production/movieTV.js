(function () {
    require(['jquery', 'ajaxUtil','bootstrapTableUtil','objectUtil','alertUtil','modalUtil','selectUtil','stringUtil','dictUtil'],
        function (jquery,ajaxUtil,bootstrapTableUtil,objectUtil,alertUtil,modalUtil,selectUtil,stringUtil,dictUtil) {


        var url = "/cul/pro/movTv/getAll";
        var aParam = {

        };

        //操作
        function operation(value, row, index){
            return [
                '<button type="button" class="edit btn btn-primary btn-sm" style="margin-right: 5px" data-toggle="modal" data-target="" >编辑</button>',
                '<button type="button" class="delete btn btn-danger btn-sm"  data-toggle="modal" data-target="#staticBackdrop" >删除</button>',
            ].join('');
        }


        function addUpdate(addOrUpdate,row){
            var myUpdateModalData ={
                modalBodyID : "myAddUpdateModalProject",
                modalTitle : addOrUpdate === "add" ? "新增项目" :"修改项目",
                modalConfirmFun:function () {
                    var projectEntity = {
                        projectName: $("#projectName").val(),
                        projectNo: $("#projectNo").val(),
                };

                    if(addOrUpdate === "add"){
                        ajaxUtil.myAjax(null,"api/project/addProject",projectEntity,function (data) {
                            if(ajaxUtil.success(data)){
                                alertUtil.info("新增项目成功");
                                refreshTable();
                                myUpdateModal.hide();
                            }else {
                                alertUtil.alert(data.msg)
                            }
                        },false);
                    }

                    if(addOrUpdate === "update"){
                        projectEntity.projectID = row.projectID;
                        ajaxUtil.myAjax(null,"api/project/updateProject",projectEntity,function (data) {
                            if(ajaxUtil.success(data)){
                                alertUtil.info("更新项目成功");
                                refreshTable();
                                myUpdateModal.hide();
                            }else {
                                alertUtil.alert(data.msg)
                            }
                        },false);
                    }


                }

            };
            var myUpdateModal = modalUtil.init(myUpdateModalData);


            var pl = dictUtil.getDictByCode(dictUtil.DICT_LIST.PROJECT_LIST);
            $("#projectName").selectUtil(pl).on('change',function () {
                var ml = dictUtil.getDictByCode(dictUtil.DICT_LIST.Module_LIST,$("#projectName").val(),true);
                $("#moduleName").selectUtil(ml);
            });

            var ml = dictUtil.getDictByCode(dictUtil.DICT_LIST.Module_LIST,stringUtil.isBlank(row) ? $("#projectName").val() : row.projectID ,true);
            $("#moduleName").selectUtil(ml);

            if(addOrUpdate === "update"){
                $("#projectName").val(row.projectName);
                $("#projectNo").val(row.projectNo);
                $("#createBy").val(row.createBy);
                $("#createAt").val(stringUtil.formatDateTime(row.createAt));
            }
            myUpdateModal.show();
        }


        //修改事件
        window.orgEvents = {
            'click .edit' : function(e, value, row, index) {
                addUpdate("update",row)
            },
            'click .delete': function (e, value, row, index) {
                var myDeleteModalData ={
                    modalBodyID : "myDeleteModalMovTV",
                    modalTitle : "删除电视电影信息",
                    modalClass : "modal-lg",
                    confirmButtonClass : "btn-danger",
                    modalConfirmFun:function () {
                        var projectEntity = {
                            projectID: row.projectID
                        };
                        var isSuccess = false;
                        ajaxUtil.myAjax(null,"/cul/pro/movTv/delMovTv/"+row.itemid+"/"+row.itemcode,null,function (data) {
                            if(ajaxUtil.success(data)){
                                alertUtil.info("删除电视电影信息成功");
                                isSuccess = true;
                                refreshTable();
                            }
                        },false,true,"delete");
                        return isSuccess;
                    }

                };
                var myDeleteModal = modalUtil.init(myDeleteModalData);
                myDeleteModal.show();
            }
        };


            $("#btn_addTask").unbind().on('click',function () {
                $("#main_body").html("");
                var url = "/chineseCultural/production/insertMovieTV";
                orange.loadPage({url: url, target: 'main_body', selector: '#fir_body', success: function(data){

                        if(data == null||data == ""){
                            return alertUtil.error( url+'加载失败');
                        }

                        $("#main_body").html(data);
                    }})
            });


        var aCol = [
            {field: 'chineseCulturalName', title: '电视电影名称'},
            {field: 'filePath', title: '景点图片', formatter:function (value, row, index) {
                    if(value == "已经损坏了"){
                        return '<p>'+value+'</p>';
                    }else{
                        return '<img  src='+value+' width="100" height="100" class="img-rounded" >';
                    }
                }},
            {field: 'chineseCulturalSource', title: '来源'},
            {field: 'chineseCulturalAuthor', title: '作者'},
            {field: 'itemcreateat', title: '创建时间'},
            {field: 'action',  title: '操作',formatter: operation,events:orgEvents}
        ];

        var myTable = bootstrapTableUtil.myBootStrapTableInit("table", url, aParam, aCol);

        function refreshTable() {
            var param = {};
            myTable.free();
            myTable = bootstrapTableUtil.myBootStrapTableInit("table", url, param, aCol);
        }
    })
})();
