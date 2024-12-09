<template>
    <div class="account-center">
      <Row class="account-center-top">
        <Col :span="9" class="account-center-col">
          <Row>
            <Col :span="8">
              <div class="account-center-top__avatar">
                <img width="70" />
                <span>Vben</span>
                <div>海纳百川，有容乃大</div>
              </div>
            </Col>
            <Col :span="16">
              <div class="account-center-top__detail">
                <template v-for="detail in details" :key="detail.title">
                  <p >
                    <part :icon="detail.icon" :name="detail.title"></part>
                  </p>
                </template>
              </div>
            </Col>
          </Row>
        </Col>
        <Col :span="7" :class="`${prefixCls}-col`">
          <a-card title="标签" size="small" style="height: 150px;" >
            <template v-for="tag in tags" :key="tag">
              <Tag class="mb-2">
                {{ tag }}
              </Tag>
            </template>
          </a-card>
        </Col>
        <Col :span="8" :class="`${prefixCls}-col`">
          <a-card title="团队" size="small" style="height: 150px;" >
            <template v-for="tag in teams" :key="tag">
              <Tag class="mb-2">
                <part :icon="tag.icon" :name="tag.title" :color="tag.color"></part>
              </Tag>
            </template>
          </a-card>
        </Col>
      </Row>
      <!-- 上半 -->
       
      <div :class="`${prefixCls}-bottom`">
        <Tabs>

          <template v-for="(item,key) in achieveList" :key="item.key">
            <TabPane :tab="item.name">
                <component :is="Pane[key]" />
            </TabPane>
          </template>
        </Tabs>
      </div>
      <!-- 下半 -->
    </div>
  </template>
  
  <script lang="ts" setup>
    import { Col, Row, Tabs, Tag } from 'ant-design-vue';
import { ref } from 'vue';
import part from "./components/part.vue";
import itemPane from "./components/itemPane.vue";
import appPane from "./components/appPane.vue";
import textPane from "./components/textPane.vue";

const value=ref(appPane)
const TabPane = Tabs.TabPane;
const Pane=[itemPane,appPane,textPane]
const prefixCls="account-center";
const details= [
  {
    icon: 'ic:outline-contacts',
    title: '交互专家',
  },
  {
    icon: 'grommet-icons:cluster',
    title: '某某某事业群',
  },
  {
    icon: 'bx:bx-home-circle',
    title: '福建省厦门市',
  },
];
const tags: string[] = [
  '很有想法的',
  '专注设计',
  '川妹子',
  '大长腿',
  '海纳百川',
  '前端开发',
  'vue3',
];
const teams = [
  {
    icon: 'ri:alipay-fill',
    title: '科学搬砖组',
    color: '#ff4000',
  },
  {
    icon: 'emojione-monotone:letter-a',
    title: '中二少年团',
    color: '#7c51b8',
  },
  {
    icon: 'ri:alipay-fill',
    title: '高逼格设计',
    color: '#00adf7',
  },
  {
    icon: 'jam:codepen-circle',
    title: '程序员日常',
    color: '#00adf7',
  },
  {
    icon: 'fa:behance-square',
    title: '科学搬砖组',
    color: '#7c51b8',
  },
  {
    icon: 'jam:codepen-circle',
    title: '程序员日常',
    color: '#ff4000',
  },
];
const achieveList = [
  {
    key: '1',
    name: '文章',
    component: 'textPane',
  },
  {
    key: '2',
    name: '应用',
    component: 'appPane',
  },
  {
    key: '3',
    name: '项目',
    component: 'itemPane',
  },
];
  </script>
  <style lang="less" scoped>
  
    .account-center {
      height: 100vh;
      background-color: #F5F5F5;
      &-col:not(:last-child) {
        padding: 0 10px;
  
        &:not(:last-child) {
          border-right: 1px dashed rgb(206 206 206 / 50%);
        }
      }
  
      &-top {
        margin: 16px 16px 12px;
        padding: 10px;
        border-radius: 3px;
  
        &__avatar {
          text-align: center;
  
          img {
            margin: auto;
            border-radius: 50%;
          }
  
          span {
            display: block;
            font-size: 20px;
            font-weight: 500;
          }
  
          div {
            margin-top: 3px;
            font-size: 12px;
          }
        }
  
        &__detail {
          margin-top: 15px;
          padding-left: 20px;
        }
  
        &__team {
          &-item {
            display: inline-block;
            padding: 4px 24px;
          }
  
          span {
            margin-left: 3px;
          }
        }
      }
  
      &-bottom {
        margin: 0 16px 16px;
        padding: 10px;
        border-radius: 3px;
        width: 100%;
        height: 40%;
      }
    }
  </style>