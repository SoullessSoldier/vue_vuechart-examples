import { createWebHistory, createRouter } from "vue-router";
import {BASE_URL} from "@/env";
import BasePage from "@/components/chart_pages/BasePage.vue";
import BarPage from "@/components/chart_pages/BarPage.vue";
import PiePage from "@/components/chart_pages/PiePage.vue";
import HorizontalBarPage from "@/components/chart_pages/HorizontalBarPage.vue";
import BubblePage from "@/components/chart_pages/BubblePage.vue";
import RadarPage from "@/components/chart_pages/RadarPage.vue";
import DoughnutPage from "@/components/chart_pages/DoughnutPage.vue";
import LinePage from "@/components/chart_pages/LinePage.vue";
import PolarAreaPage from "@/components/chart_pages/PolarAreaPage.vue";
import ScatterPage from "@/components/chart_pages/ScatterPage.vue";


const routes = [
    {
        path: "/",
        name: "index",
        component: BasePage,
    },
    {
        path: "/bar",
        name: "bar",
        component: BarPage,
    },
    {
        path: "/pie",
        name: "pie",
        component: PiePage,
    },
    {
        path: "/horizontal-bar",
        name: "horizontal-bar",
        component: HorizontalBarPage,
    },
    {
        path: "/bubble",
        name: "bubble",
        component: BubblePage,
    },
    {
        path: "/radar",
        name: "radar",
        component: RadarPage,
    },
    {
        path: "/doughnut",
        name: "doughnut",
        component: DoughnutPage,
    },
    {
        path: "/line",
        name: "line",
        component: LinePage,
    },
    {
        path: "/polar-area",
        name: "polar-area",
        component: PolarAreaPage,
    },
    {
        path: "/scatter",
        name: "scatter",
        component: ScatterPage,
    },
];

const router = createRouter({
    history: createWebHistory(BASE_URL),
    routes,
});

export default router;