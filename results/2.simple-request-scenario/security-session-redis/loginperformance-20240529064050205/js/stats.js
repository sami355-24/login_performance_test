var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "650",
        "ok": "650",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "37542",
        "ok": "37542",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "9222",
        "ok": "9222",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "12396",
        "ok": "12396",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1698",
        "ok": "1698",
        "ko": "-"
    },
    "percentiles2": {
        "total": "18598",
        "ok": "18598",
        "ko": "-"
    },
    "percentiles3": {
        "total": "32964",
        "ok": "32964",
        "ko": "-"
    },
    "percentiles4": {
        "total": "35711",
        "ok": "35711",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 278,
    "percentage": 43
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 30,
    "percentage": 5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 342,
    "percentage": 53
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.404",
        "ok": "11.404",
        "ko": "-"
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
        "total": "325",
        "ok": "325",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "37542",
        "ok": "37542",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "16889",
        "ok": "16889",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13554",
        "ok": "13554",
        "ko": "-"
    },
    "percentiles1": {
        "total": "18395",
        "ok": "18395",
        "ko": "-"
    },
    "percentiles2": {
        "total": "30835",
        "ok": "30835",
        "ko": "-"
    },
    "percentiles3": {
        "total": "34561",
        "ok": "34561",
        "ko": "-"
    },
    "percentiles4": {
        "total": "36412",
        "ok": "36412",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 96,
    "percentage": 30
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 227,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.702",
        "ok": "5.702",
        "ko": "-"
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
        "total": "325",
        "ok": "325",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "21495",
        "ok": "21495",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1555",
        "ok": "1555",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2462",
        "ok": "2462",
        "ko": "-"
    },
    "percentiles1": {
        "total": "600",
        "ok": "600",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1998",
        "ok": "1998",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5583",
        "ok": "5583",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10499",
        "ok": "10499",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 182,
    "percentage": 56
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 28,
    "percentage": 9
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 115,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.702",
        "ok": "5.702",
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
