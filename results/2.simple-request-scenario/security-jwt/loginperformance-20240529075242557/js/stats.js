var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "37046",
        "ok": "34882",
        "ko": "2164"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "31151",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "6455",
        "ok": "6836",
        "ko": "320"
    },
    "standardDeviation": {
        "total": "6436",
        "ok": "6374",
        "ko": "3790"
    },
    "percentiles1": {
        "total": "3999",
        "ok": "4640",
        "ko": "0"
    },
    "percentiles2": {
        "total": "9057",
        "ok": "9370",
        "ko": "0"
    },
    "percentiles3": {
        "total": "20932",
        "ok": "21002",
        "ko": "2"
    },
    "percentiles4": {
        "total": "31019",
        "ok": "31020",
        "ko": "10046"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2055,
    "percentage": 6
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 383,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 32444,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2164,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "420.977",
        "ok": "396.386",
        "ko": "24.591"
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
        "ok": "17441",
        "ko": "2164"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "31151",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "7897",
        "ok": "8837",
        "ko": "320"
    },
    "standardDeviation": {
        "total": "8027",
        "ok": "7914",
        "ko": "3790"
    },
    "percentiles1": {
        "total": "4282",
        "ok": "5444",
        "ko": "0"
    },
    "percentiles2": {
        "total": "11193",
        "ok": "12621",
        "ko": "0"
    },
    "percentiles3": {
        "total": "22467",
        "ok": "22914",
        "ko": "2"
    },
    "percentiles4": {
        "total": "31044",
        "ok": "31049",
        "ko": "10046"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 581,
    "percentage": 3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 181,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 16679,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2164,
    "percentage": 11
},
    "meanNumberOfRequestsPerSecond": {
        "total": "222.784",
        "ok": "198.193",
        "ko": "24.591"
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
        "total": "17441",
        "ok": "17441",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10514",
        "ok": "10514",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4835",
        "ok": "4835",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3257",
        "ok": "3257",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3881",
        "ok": "3881",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8079",
        "ok": "8079",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10100",
        "ok": "10100",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10324",
        "ok": "10324",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1474,
    "percentage": 8
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 202,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 15765,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "198.193",
        "ok": "198.193",
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
