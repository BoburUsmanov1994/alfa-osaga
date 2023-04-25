import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../../components/header";
import {get} from "lodash"
import styled from "styled-components";
import Sidebar from "../../components/sidebar";
import Content from "../../components/content";
import {KEYS} from "../../constants/key";
import {URLS} from "../../constants/url";
import {useStore} from "../../store";
import {useGetAllQuery} from "../../hooks/api";
import useGetAllQueryAlfa from "../../hooks/api/useGetAllQueryAlfa";
import storage from "../../services/storage";

const Styled = styled.div`
  padding-top: 80px;
  position: relative;
  .wrap-content{
    display: flex;
  }
`;
const MainLayout = ({...rest}) => {
    const setUser = useStore(state => get(state, 'setUser', []))
    const token = get(JSON.parse(storage.get('settings')), 'state.translateToken', null) ;
    const {data, isLoading} = useGetAllQueryAlfa({
        key: KEYS.getMeAlfa, url: URLS.getMeAlfa, cb: {
            success: ({users:result}) => {
                setUser(result)
            }
        },
        enabled:!!(token)
    })
    return (
        <Styled {...rest}>
            <Header/>
            <div className={'wrap-content'}>
                <Sidebar />
                <Content>
                    <Outlet/>
                </Content>
            </div>
        </Styled>
    );
};

export default MainLayout;