import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,

    routes: [{
        path: '/',
        name: '系统列表',
        component: () =>
            import ('./views/Home.vue'),
        hidden: false,
        children: [{
                path: '/coal_mining',
                name: ' 采煤工作面',
                id: 100,
                component: () =>
                    import ('./views/mining/mining.vue'),
                hidden: false,

            }, {
                path: '/coalcutter',
                name: ' 采煤机页面',
                id: 1001,
                component: () =>
                    import ('./views/mining/coalcutter.vue'),
                hidden: true,
            }, {
                path: '/main_pump',
                name: ' 采煤机本体页面',
                id: 1001,
                component: () =>
                    import ('./views/mining/main_pump.vue'),
                hidden: true,
            }, {
                path: '/tunnelling',
                name: ' 掘进工作面',
                id: 101,
                component: () =>
                    import ('./views/tunnelling/tunnelling.vue'),
                hidden: false,

            }, {
                path: '/monitor',
                name: ' 安全监控',
                id: 102,
                component: () =>
                    import ('./views/monitor/monitor.vue'),
                hidden: false,

            }, {
            path: '/checkSubSys',
            name: '查看子系统',
            hidden: true,
            component: () =>
                import('./views/monitor/checkSubSys.vue')
            }, {
                path: '/checkCheckPoint',
                name: '查看测点数据',
                hidden: true,
                component: () =>
                    import('./views/monitor/checkCheckPoint.vue')
            }, {
                    path: '/transportation',
                    name: ' 主运输系统',
                    id: 103,
                    component: () =>
                        import ('./views/transportation/transportation.vue'),
                    hidden: false,
            }, {
                path: '/coalCentral',
                name: ' 煤中央皮带',
                id: 1030,
                component: () =>
                    import ('./views/transportation/subSystem/coalCentral.vue'),
                hidden: true,
            },
            {
                path: '/belt_body',
                name: ' 皮带本体',
                id: 10300,
                component: () =>
                    import ('./views/transportation/subSystem/belt_body.vue'),
                hidden: true,
            },
            {
                path: '/mainAdit',
                name: ' 主平硐皮带',
                id: 1031,
                component: () =>
                    import ('./views/transportation/subSystem/mainAdit.vue'),
                hidden: true,
            },
            {
                path: '/warehouse',
                name: ' 上仓皮带',
                id: 1032,
                component: () =>
                    import ('./views/transportation/subSystem/warehouse.vue'),
                hidden: true,
            }, {
                path: '/ventilate',
                name: ' 通风系统',
                id: 104,
                component: () =>
                    import ('./views/ventilate/ventilate.vue'),
                hidden: false,

            },
            {
                path: '/firstVentilator',
                name: ' 一号通风机',
                id: 1040,
                component: () =>
                    import ('./views/ventilate/firstVentilator.vue'),
                hidden: true,

            }, {
                path: '/compressed',
                name: ' 压风系统',
                id: 105,
                component: () =>
                    import ('./views/compressed/compressed.vue'),
                hidden: false,

            }, {
                path: '/drain',
                name: ' 主排水系统',
                id: 106,
                component: () =>
                    import ('./views/drain/drain.vue'),
                hidden: false,
            }, {
                path: '/power_supply',
                name: ' 供电系统',
                id: 107,
                component: () =>
                    import ('./views/power_supply/power.vue'),
                hidden: false,

            }, {
                path: '/auxiliary_transport',
                name: ' 辅运输系统',
                id: 108,
                component: () =>
                    import ('./views/auxiliary_transport/auxiliarytrans.vue'),
                hidden: false,

            }, {
                path: '/beam_tube',
                name: ' 束管检测',
                id: 109,
                component: () =>
                    import ('./views/beam_tube/beam.vue'),
                hidden: false,
            }, {
                path: '/gas',
                name: ' 瓦斯抽放',
                id: 110,
                component: () =>
                    import ('./views/gas/gas.vue'),
                hidden: false,

            }, {
                path: '/personnel_location',
                name: ' 人员定位',
                id: 111,
                component: () =>
                    import ('./views/personnel_location/location.vue'),
                hidden: location,

            }
        ]
    }, {
        path: '/',
        name: '应用列表',
        component: () =>
            import ('./views/Home.vue'),
        hidden: false,
        children: [{
            path: '/belt_coal_quantity',
            name: '皮带煤量',
            id: 200,
            component: () =>
                import ('./views/app_belt_coal_quantity/beltCoalQuantity.vue'),
            hidden: false,
        }, {
            path: '/safety_monitoring',
            name: '安全监测',
            id: 201,
            component: () =>
                import ('./views/app_safety_monitoring/safetyMonitoring.vue'),
            hidden: false,
        }, {
            path: '/hazard_warning',
            name: '危险源预警',
            id: 202,
            component: () =>
                import ('./views/app_hazard_warning/hazardWarning.vue'),
            hidden: false,
        }, {
            path: '/beam_tube_inspection',
            name: '束管检测',
            id: 203,
            component: () =>
                import ('./views/app_beam_tube_inspection/beamTubeInspection.vue'),
            hidden: false,
        }, {
            path: '/hydrological_monitoring',
            name: '水文监测',
            id: 204,
            component: () =>
                import ('./views/app_hydrological_monitoring/hydrologicalMonitoring.vue'),
            hidden: false,
        }, {
            path: '/mine_pressure_monitoring',
            name: '矿压监测',
            id: 205,
            component: () =>
                import ('./views/app_mine_pressure_monitoring/minePressureMonitoring.vue'),
            hidden: false,
        }, {
            path: '/risk_monitoring',
            name: '风险监控',
            id: 206,
            component: () =>
                import ('./views/app_risk_monitoring/riskMonitoring.vue'),
            hidden: false,
        }, {
            path: '/personnel_positioning',
            name: '人员定位',
            id: 207,
            component: () =>
                import ('./views/app_personnel_positioning/personnelPositioning.vue'),
            hidden: false,
        }, {
            path: '/area_monitoring',
            name: '区域监控',
            id: 208,
            component: () =>
                import ('./views/app_area_monitoring/areaMonitoring.vue'),
            hidden: false,
        }, {
            path: '/industrial_video',
            name: '工业视频',
            id: 209,
            component: () =>
                import ('./views/app_industrial_video/industrialVideo.vue'),
            hidden: false,
        }]
    }]
})
