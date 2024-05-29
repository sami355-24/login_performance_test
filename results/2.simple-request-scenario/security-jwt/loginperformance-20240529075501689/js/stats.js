var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "37614",
        "ok": "36018",
        "ko": "1596"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "31108",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "6376",
        "ok": "6628",
        "ko": "699"
    },
    "standardDeviation": {
        "total": "6560",
        "ok": "6477",
        "ko": "5808"
    },
    "percentiles1": {
        "total": "3736",
        "ok": "4022",
        "ko": "0"
    },
    "percentiles2": {
        "total": "9128",
        "ok": "9304",
        "ko": "1"
    },
    "percentiles3": {
        "total": "21689",
        "ok": "21756",
        "ko": "3"
    },
    "percentiles4": {
        "total": "31015",
        "ok": "31015",
        "ko": "13387"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2427,
    "percentage": 6
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 912,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 32679,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1596,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "422.629",
        "ok": "404.697",
        "ko": "17.933"
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
        "ok": "18009",
        "ko": "1596"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "31108",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "7830",
        "ok": "8462",
        "ko": "699"
    },
    "standardDeviation": {
        "total": "8193",
        "ok": "8074",
        "ko": "5808"
    },
    "percentiles1": {
        "total": "3977",
        "ok": "4679",
        "ko": "0"
    },
    "percentiles2": {
        "total": "10911",
        "ok": "11486",
        "ko": "1"
    },
    "percentiles3": {
        "total": "24099",
        "ok": "24717",
        "ko": "3"
    },
    "percentiles4": {
        "total": "31039",
        "ok": "31040",
        "ko": "13387"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 676,
    "percentage": 3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 341,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 16992,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1596,
    "percentage": 8
},
    "meanNumberOfRequestsPerSecond": {
        "total": "220.281",
        "ok": "202.348",
        "ko": "17.933"
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
        "total": "18009",
        "ok": "18009",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10989",
        "ok": "10989",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4794",
        "ok": "4794",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3463",
        "ok": "3463",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3435",
        "ok": "3425",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8210",
        "ok": "8251",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10297",
        "ok": "10297",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10664",
        "ok": "10664",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1751,
    "percentage": 10
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 571,
    "percentage": 3
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 15687,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "202.348",
        "ok": "202.348",
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
