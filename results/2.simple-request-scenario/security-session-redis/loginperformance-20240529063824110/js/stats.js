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
        "total": "40286",
        "ok": "40286",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "9273",
        "ok": "9273",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "12089",
        "ok": "12089",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2035",
        "ok": "2035",
        "ko": "-"
    },
    "percentiles2": {
        "total": "18317",
        "ok": "18317",
        "ko": "-"
    },
    "percentiles3": {
        "total": "34764",
        "ok": "34764",
        "ko": "-"
    },
    "percentiles4": {
        "total": "39145",
        "ok": "39145",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 257,
    "percentage": 40
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
    "count": 363,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.833",
        "ok": "10.833",
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
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "40286",
        "ok": "40286",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "16570",
        "ok": "16570",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13171",
        "ok": "13171",
        "ko": "-"
    },
    "percentiles1": {
        "total": "17765",
        "ok": "17765",
        "ko": "-"
    },
    "percentiles2": {
        "total": "27528",
        "ok": "27528",
        "ko": "-"
    },
    "percentiles3": {
        "total": "37492",
        "ok": "37492",
        "ko": "-"
    },
    "percentiles4": {
        "total": "39859",
        "ok": "39859",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 83,
    "percentage": 26
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
    "count": 240,
    "percentage": 74
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.417",
        "ok": "5.417",
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
        "total": "20403",
        "ok": "20403",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1975",
        "ok": "1975",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3506",
        "ok": "3506",
        "ko": "-"
    },
    "percentiles1": {
        "total": "793",
        "ok": "793",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2199",
        "ok": "2199",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9640",
        "ok": "9640",
        "ko": "-"
    },
    "percentiles4": {
        "total": "19180",
        "ok": "19180",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 174,
    "percentage": 54
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
    "count": 123,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.417",
        "ok": "5.417",
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
