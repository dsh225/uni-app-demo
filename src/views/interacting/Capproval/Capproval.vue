<template>
    <section class="wrapprSection">
        <div class="mainTitle">
           <span>意见审批</span>
        </div>
         <div class="searchKey boxshow">           
                <el-form :inline="true" >
                <el-form-item label="标题">
                      <el-input placeholder="请输入标题" size="small"></el-input>
                  </el-form-item>
                  <el-form-item>
                      <el-button class="defaultBtn" >检索</el-button>
                  </el-form-item>
              </el-form>
          </div> 
        <div class="contentbox contentbox-full ">             
                    <div class="TabRBtn">
                        <el-button class="defaultBtn"><i class="fa fa-plus-square" aria-hidden="true"></i> 新增意见</el-button>
                    </div>
                    
                                <div class="searchCon boxshow">    
                                   <el-table
                                        :data="tableData"
                                        border
                                        :height="bodyHeight"
                                        element-loading-text="努力加载中..."
                                        header-row-class-name="tableHeader" 
                                        stripe 
                                        class="defaultTable">
                                           <el-table-column type="index" width="50" label="序号">
                                          </el-table-column>
                                        <el-table-column  prop="name" label="附件"  width="80">
                                             <template slot-scope="scope">                                                 
                                                 <i class="fa fa-paperclip tableIcon"></i> 
                                              </template>
                                        </el-table-column>
                                        <el-table-column prop="name" label="主题">
                                        </el-table-column>
                                         <el-table-column prop="address" label="创建时间">                                      
                                        </el-table-column>
                                         <el-table-column prop="address" label="意见状态">                                      
                                        </el-table-column>
                                         <el-table-column prop="address" label="题名">                                      
                                        </el-table-column>
                                         <el-table-column prop="date" label="最新修改时间">                                      
                                        </el-table-column>                                                                 
                                    </el-table>  
                                    <div class="clear" style="margin-top:10px">                         
                                        <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="page"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="100"
                                        layout="total, sizes, prev, next, jumper"
                                        :total="400">
                                        </el-pagination>
                                    </div> 
                                   </div>                       
                            </el-tab-pane>                   
               
        </div>        
       </section>
</template>

<script lang="ts">
   import { Component, Vue, Watch } from 'vue-property-decorator';   
    import Service from './Capproval.service';
    export default class Capproval extends Vue{   
        bodyHeight: number= document.documentElement.clientHeight - 280 ; 
        radio3: string = '1';
        treedata001: any = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      activeName:string = 'first';
      tableData: any =[{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }];
        total: number = 1;
         page: number = 0;
        pageSize: number = 25;                  
        defaultProps: any = {
            children: 'children',
            label: 'name'
        };    
        constructor(){
            super();
        };
        superSearchShow(){
           this.$nextTick(() => {
             this.$refs.superSearch.superSearchVisible=true;           
           })          
        }
        handleCurrentChange(val:number) {
            this.page = val;
            this.start = (val-1)*(this.limit);           
        };
        handleSizeChange(val:number) {
            this.limit = val;
            this.start = val*(this.page-1);         
        };

        created(){            
        };

        mounted(){
            window.onresize = () => {
                return (() => {
                    this.bodyHeight = document.documentElement.clientHeight - 280;
                })()
            };
        };
    }
</script>

<style lang="scss" scoped>  
   @import '../../../styles/innerPublic.scss';
    .TabRBtn{
        top: 5px;
      }
    .wrapprSection > .contentbox.contentbox-full{
         top:110px
    }
</style>