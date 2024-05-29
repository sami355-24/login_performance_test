var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "38312",
        "ok": "37414",
        "ko": "898"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "31162",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "6179",
        "ok": "6268",
        "ko": "2469"
    },
    "standardDeviation": {
        "total": "6222",
        "ok": "6017",
        "ko": "11366"
    },
    "percentiles1": {
        "total": "3573",
        "ok": "3804",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8702",
        "ok": "8796",
        "ko": "1"
    },
    "percentiles3": {
        "total": "20603",
        "ok": "20600",
        "ko": "12001"
    },
    "percentiles4": {
        "total": "31017",
        "ok": "31016",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2420,
    "percentage": 6
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 750,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 34244,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 898,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "430.472",
        "ok": "420.382",
        "ko": "10.09"
    }
},
contents: {
"req_1-a-----------646396859": {
        type: "REQUEST",
        name: "1-a. 로그인",
path: "1-a. 로그인",
pathFormatted: "req_1-a-----------646396859",
stats: {
    "name": "1-a. 로그인",
    "numberOfRequests": {
        "total": "19605",
        "ok": "18707",
        "ko": "898"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "31162",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "7664",
        "ok": "7914",
        "ko": "2469"
    },
    "standardDeviation": {
        "total": "7852",
        "ok": "7554",
        "ko": "11366"
    },
    "percentiles1": {
        "total": "3965",
        "ok": "4343",
        "ko": "0"
    },
    "percentiles2": {
        "total": "10801",
        "ok": "11011",
        "ko": "1"
    },
    "percentiles3": {
        "total": "22264",
        "ok": "22274",
        "ko": "12001"
    },
    "percentiles4": {
        "total": "31036",
        "ok": "31032",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 732,
    "percentage": 4
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 317,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 17658,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 898,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "220.281",
        "ok": "210.191",
        "ko": "10.09"
    }
}
    },"req_1-b--------------856095635": {
        type: "REQUEST",
        name: "1-b. 비즈니스 로직",
path: "1-b. 비즈니스 로직",
pathFormatted: "req_1-b--------------856095635",
stats: {
    "name": "1-b. 비즈니스 로직",
    "numberOfRequests": {
        "total": "18707",
        "ok": "18707",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10523",
        "ok": "10523",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4622",
        "ok": "4622",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3154",
        "ok": "3154",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3198",
        "ok": "3198",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7880",
        "ok": "7889",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9822",
        "ok": "9822",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10194",
        "ok": "10193",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1688,
    "percentage": 9
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 433,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 16586,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "210.191",
        "ok": "210.191",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
