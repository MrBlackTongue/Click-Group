import React from "react";
import Header from '../Components/Header/Header'
// import Content from "../Components/Content/Content";
// import TreeSidebar from "../Components/TreeSidebar/TreeSidebar";
import ru_RU from "antd/lib/locale/ru_RU";
// import {BrowserRouter, Route, Switch} from "react-router-dom";
// import EditMainSh from "./EditMainSh";
// import EditMainNpp from "./EditMainNpp";
// import EditChaptersSh from "./EditChaptersSh";
// import EditChaptersNpp from "./EditChaptersNpp";
import {ConfigProvider, Layout, Menu, Button} from "antd";
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    SnippetsOutlined,
} from '@ant-design/icons';

const {SubMenu} = Menu;

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            report: [],
            id: [],
            total: '',
            pageNum: 1,
            pageSize: '',
            value: '',
            tasksFilter: '',
            plantsFilter: '',
            loading: false,
            collapsed: false,
        }
    }

    updateData = (value) => {
        this.setState({
            data: value,
        })
    }

    updateTotal = (value) => {
        this.setState({
            total: value,
        })
    }

    updateId = (value) => {
        this.setState({
            id: value,
        })
        this.props.updateId(this.state.id)
    }

    updatePageNum = (value) => {
        this.setState({
            pageNum: value,
        })
    }

    updatePageSize = (value) => {
        this.setState({
            pageSize: value,
        })
    }

    updateValue = (value) => {
        this.setState({
            value: value,
        })
    }

    updateTasksFilter = (value) => {
        this.setState({
            tasksFilter: value,
        })
    }

    updatePlantsFilter = (value) => {
        this.setState({
            plantsFilter: value,
        })
    }

    onChange = (response) => {
        this.setState({
            data: response
        })
    }

    updateLoading = (value) => {
        this.setState({
            loading: value,
        })
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const {data, total, pageNum, pageSize} = this.state

        return (

            <ConfigProvider locale={ru_RU}>

                {/*<Layout>*/}
                {/*    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>*/}
                {/*        <div className="logo"/>*/}
                {/*        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>*/}
                {/*            <Menu.Item key="1" icon={<UserOutlined/>}>*/}
                {/*                nav 1*/}
                {/*            </Menu.Item>*/}
                {/*            <Menu.Item key="2" icon={<VideoCameraOutlined/>}>*/}
                {/*                nav 2*/}
                {/*            </Menu.Item>*/}
                {/*            <Menu.Item key="3" icon={<UploadOutlined/>}>*/}
                {/*                nav 3*/}
                {/*            </Menu.Item>*/}
                {/*        </Menu>*/}
                {/*    </Sider>*/}
                {/*    <Layout className="site-layout">*/}
                {/*        <Header className="site-layout-background" style={{padding: 0}}>*/}
                {/*            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {*/}
                {/*                className: 'trigger',*/}
                {/*                onClick: this.toggle,*/}
                {/*            })}*/}
                {/*        </Header>*/}
                {/*        <Content*/}
                {/*            className="site-layout-background"*/}
                {/*            style={{*/}
                {/*                margin: '24px 16px',*/}
                {/*                padding: 24,*/}
                {/*                minHeight: 280,*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            Content*/}
                {/*        </Content>*/}
                {/*    </Layout>*/}
                {/*</Layout>*/}
                <div>
                    <Header
                        updateData={this.updateData}
                        updateTotal={this.updateTotal}
                        updatePageNum={this.updatePageNum}
                        updatePageSize={this.updatePageSize}
                        updateValue={this.updateValue}
                        updatePlantsFilter={this.state.plantsFilter}
                        updateTasksFilter={this.state.tasksFilter}
                    />
                    <div className='sider-content'>
                        <div style={{width: 256}}>
                            <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
                                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                            </Button>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                // theme="dark"
                                inlineCollapsed={this.state.collapsed}
                            >

                                {/*<Menu.Itemkey="1"icon={<PieChartOutlined/>}>*/}
                                {/*Option1*/}
                                {/*</Menu.Item>*/}
                                {/*<Menu.Itemkey="2"icon={<DesktopOutlined/>}>*/}
                                {/*Option2*/}
                                {/*</Menu.Item>*/}
                                {/*<Menu.Itemkey="3"icon={<ContainerOutlined/>}>*/}
                                {/*Option3*/}
                                {/*</Menu.Item>*/}
                                <SubMenu key="sub1" icon={<MailOutlined/>} title="Создать" className='submenu'>
                                    <Menu.Item className='menu-item'>
                                        <a target="_blank" rel="noopenernoreferrer"href="https://www.antgroup.com">
                                            ФНП
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item className='menu-item'>
                                        <a target="_blank" rel="noopenernoreferrer" href="https://www.aliyun.com">
                                            ФНП для ОИАЭ
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item className='menu-item'>
                                        <a target="_blank" rel="noopenernoreferrer" href="https://www.luohanacademy.com">
                                            Несоответствий для ОИАЭ
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item className='menu-item'>
                                        <a target="_blank" rel="noopenernoreferrer" href="https://www.antgroup.com">
                                            Оценка влияния на безопасность
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item className='menu-item'>
                                        <a target="_blank" rel="noopenernoreferrer" href="https://www.aliyun.com">
                                            Мероприятия
                                        </a>
                                    </Menu.Item>
                                </SubMenu>

                                <Menu.Item key="sub2" icon={<AppstoreOutlined/>} title="РеестрФНП" className='submenu'>
                                    <Menu.Item className='menu-item'>
                                        <a target="_blank" rel="noopenernoreferrer" href="https://www.aliyun.com">
                                            Реестр ФНП
                                        </a>
                                    </Menu.Item>
                                </Menu.Item>
                                <Menu.Item key="sub3" icon={<MailOutlined/>} title="ТОиР" className='submenu'>
                                    <Menu.Item className='menu-item'>
                                        <a target="_blank" rel="noopenernoreferrer" href="https://www.aliyun.com">
                                            ФНП для ОИАЭ
                                        </a>
                                    </Menu.Item>
                                </Menu.Item>
                                <Menu.Item key="sub2" icon={<AppstoreOutlined/>} title="РеестрФНП" className='submenu'>
                                    <Menu.Item className='menu-item'>
                                        <a target="_blank" rel="noopenernoreferrer" href="https://www.aliyun.com">
                                            Реестр несоответствий для ОИАЭ
                                        </a>
                                    </Menu.Item>
                                </Menu.Item>
                                <Menu.Item key="sub3" icon={<MailOutlined/>} title="ТОиР" className='submenu'>
                                    <Menu.Item className='menu-item'>
                                        <a target="_blank" rel="noopenernoreferrer" href="https://www.aliyun.com">
                                            Оценка влияния на безопасность
                                        </a>
                                    </Menu.Item>
                                </Menu.Item>
                                <Menu.Item key="sub2" icon={<AppstoreOutlined/>} title="РеестрФНП" className='submenu'>
                                    <Menu.Item className='menu-item'>
                                        <a target="_blank" rel="noopenernoreferrer" href="https://www.aliyun.com">
                                            Мероприятия
                                        </a>
                                    </Menu.Item>
                                </Menu.Item>
                                <Menu.Item key="sub2" icon={<SnippetsOutlined/>} title="РеестрФНП" className='submenu'>
                                    <Menu.Item className='menu-item'>
                                        <a target="_blank" rel="noopenernoreferrer" href="https://www.aliyun.com">
                                            Мои задачи
                                        </a>
                                    </Menu.Item>
                                </Menu.Item>
                            </Menu>


                        {/*<Menu.Item key="1" icon={<PieChartOutlined/>}>*/}
                                {/*    Option 1*/}
                                {/*</Menu.Item>*/}
                                {/*<Menu.Item key="2" icon={<DesktopOutlined/>}>*/}
                                {/*    Option 2*/}
                                {/*</Menu.Item>*/}
                                {/*<Menu.Item key="3" icon={<ContainerOutlined/>}>*/}
                                {/*    Option 3*/}
                                {/*</Menu.Item>*/}
                                {/*<SubMenu key="sub1" icon={<MailOutlined/>} title="Нарушения" className='submenu'>*/}
                                {/*    <Menu.Item className='menu-item'>*/}
                                {/*        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">*/}
                                {/*            Поиск документов*/}
                                {/*        </a>*/}
                                {/*    </Menu.Item>*/}
                                {/*    <Menu.Item className='menu-item'>*/}
                                {/*        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">*/}
                                {/*            Поручения*/}
                                {/*        </a>*/}
                                {/*    </Menu.Item>*/}
                                {/*    <Menu.Item className='menu-item'>*/}
                                {/*        <a target="_blank" rel="noopener noreferrer"*/}
                                {/*           href="https://www.luohanacademy.com">*/}
                                {/*            Статистика по документам*/}
                                {/*        </a>*/}
                                {/*    </Menu.Item>*/}
                                {/*    <Menu.Item className='menu-item'>*/}
                                {/*        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">*/}
                                {/*            Дефекты*/}
                                {/*        </a>*/}
                                {/*    </Menu.Item>*/}
                                {/*    <Menu.Item className='menu-item'>*/}
                                {/*        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">*/}
                                {/*            Нарушения*/}
                                {/*        </a>*/}
                                {/*    </Menu.Item>*/}
                                {/*    <Menu.Item className='menu-item'>*/}
                                {/*        <a target="_blank" rel="noopener noreferrer"*/}
                                {/*           href="https://www.luohanacademy.com">*/}
                                {/*            Отклонения*/}
                                {/*        </a>*/}
                                {/*    </Menu.Item>*/}
                                {/*    <Menu.Item className='menu-item'>*/}
                                {/*        <a target="_blank" rel="noopener noreferrer"*/}
                                {/*           href="https://www.luohanacademy.com">*/}
                                {/*            СНУ*/}
                                {/*        </a>*/}
                                {/*    </Menu.Item>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Отклонения" className='submenu'>*/}
                                {/*    <Menu.Item className='menu-item'>*/}
                                {/*        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">*/}
                                {/*            Обстановка на АЭС*/}
                                {/*        </a>*/}
                                {/*    </Menu.Item>*/}
                                {/*    <Menu.Item className='menu-item'>*/}
                                {/*        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">*/}
                                {/*            Технологическая обстановка*/}
                                {/*        </a>*/}
                                {/*    </Menu.Item>*/}
                                {/*    <Menu.Item className='menu-item'>*/}
                                {/*        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">*/}
                                {/*            WEB ОИС*/}
                                {/*        </a>*/}
                                {/*    </Menu.Item>*/}
                                {/*    <Menu.Item className='menu-item'>*/}
                                {/*        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">*/}
                                {/*            Корр. меры: ОКМ*/}
                                {/*        </a>*/}
                                {/*    </Menu.Item>*/}
                                {/*    <Menu.Item className='menu-item'>*/}
                                {/*        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">*/}
                                {/*            Кристализация знанний. Поис оборудования*/}
                                {/*        </a>*/}
                                {/*    </Menu.Item>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu key="sub3" icon={<MailOutlined/>} title="ТОиР" className='submenu'>*/}
                                {/*    <Menu.Item className='menu-item'>*/}
                                {/*        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">*/}
                                {/*            Ремонты - Показатели*/}
                                {/*        </a>*/}
                                {/*    </Menu.Item>*/}
                                {/*    <Menu.Item className='menu-item'>*/}
                                {/*        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">*/}
                                {/*            Ремонты - УОЭ*/}
                                {/*        </a>*/}
                                {/*    </Menu.Item>*/}
                                {/*</SubMenu>*/}
                            {/*</Menu>`*/}
                        </div>


                        {/*<BrowserRouter>*/}
                        {/*    <Switch>*/}
                        {/*        <Route path={'/'} exact render={(props) => (*/}
                        {/*            <div className="Home">*/}

                        {/*                <div className='home-context-div'>*/}

                        <div>
                            <iframe src="http://www.youtube.com/embed/xDMP3i36naA" className='iframe'></iframe>
                            {/*<iframe src="https://10.113.17.65:5070/r/16" className='iframe'></iframe>*/}
                        </div>
                    </div>

                    {/*                    /!*<TreeSidebar*!/*/}
                    {/*                    /!*    updateData={this.updateData}*!/*/}
                    {/*                    /!*    updateTotal={this.updateTotal}*!/*/}
                    {/*                    /!*    updatePageNum={this.updatePageNum}*!/*/}
                    {/*                    /!*    updatePageSize={this.updatePageSize}*!/*/}
                    {/*                    /!*    updateTasksFilter={this.updateTasksFilter}*!/*/}
                    {/*                    /!*    updatePlantsFilter={this.updatePlantsFilter}*!/*/}
                    {/*                    /!*    updateLoading={this.updateLoading}*!/*/}

                    {/*/>*/}
                    {/*                    /!*<Content*!/*/}
                    {/*                    /!*    dataParentToChild={data}*!/*/}
                    {/*                    /!*    updateId={this.updateId}*!/*/}
                    {/*                    /!*    totalParentToChild={total}*!/*/}
                    {/*                    /!*    pageNumParentToChild={pageNum}*!/*/}
                    {/*                    /!*    pageSizeParentToChild={pageSize}*!/*/}
                    {/*                    /!*    onChange={this.onChange}*!/*/}
                    {/*                    /!*    num={this.state.pageNum}*!/*/}
                    {/*                    /!*    size={this.state.pageSize}*!/*/}
                    {/*                    /!*    value={this.state.value}*!/*/}
                    {/*                    /!*    updatePageNum={this.updatePageNum}*!/*/}
                    {/*                    /!*    updatePageSize={this.updatePageSize}*!/*/}
                    {/*                    /!*    updateTasksFilter={this.state.tasksFilter}*!/*/}
                    {/*                    /!*    updatePlantsFilter={this.state.plantsFilter}*!/*/}
                    {/*                    /!*    loading={this.state.loading}*!/*/}
                    {/*/>*/}
                    {/*                </div>*/}
                </div>

                {/*        )}/> />*/}
                {/*        <Route path={`/sh/main/`} component={EditMainSh}/>*/}
                {/*        <Route path={`/npp/main/`} component={EditMainNpp}/>*/}
                {/*        <Route path={`/sh/chapters/`} component={EditChaptersSh}/>*/}
                {/*        <Route path={`/npp/chapters/`} component={EditChaptersNpp}/>*/}
                {/*    </Switch>*/}
                {/*</BrowserRouter>*/}
            </ConfigProvider>


        );
    }
}
