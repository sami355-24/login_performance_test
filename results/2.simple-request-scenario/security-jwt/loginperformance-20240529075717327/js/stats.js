var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "36353",
        "ok": "33496",
        "ko": "2857"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "31256",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "7200",
        "ok": "7748",
        "ko": "786"
    },
    "standardDeviation": {
        "total": "7148",
        "ok": "6930",
        "ko": "6507"
    },
    "percentiles1": {
        "total": "4756",
        "ok": "5398",
        "ko": "0"
    },
    "percentiles2": {
        "total": "9685",
        "ok": "9955",
        "ko": "0"
    },
    "percentiles3": {
        "total": "22802",
        "ok": "22934",
        "ko": "1"
    },
    "percentiles4": {
        "total": "31034",
        "ok": "31034",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1927,
    "percentage": 5
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 189,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 31380,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2857,
    "percentage": 8
},
    "meanNumberOfRequestsPerSecond": {
        "total": "417.851",
        "ok": "385.011",
        "ko": "32.839"
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
        "ok": "16748",
        "ko": "2857"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "12",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "31256",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "8813",
        "ok": "10183",
        "ko": "786"
    },
    "standardDeviation": {
        "total": "8915",
        "ok": "8541",
        "ko": "6507"
    },
    "percentiles1": {
        "total": "4976",
        "ok": "6498",
        "ko": "0"
    },
    "percentiles2": {
        "total": "12615",
        "ok": "15061",
        "ko": "0"
    },
    "percentiles3": {
        "total": "31003",
        "ok": "31007",
        "ko": "1"
    },
    "percentiles4": {
        "total": "31079",
        "ok": "31077",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 234,
    "percentage": 1
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 67,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 16447,
    "percentage": 84
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2857,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "225.345",
        "ok": "192.506",
        "ko": "32.839"
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
        "total": "16748",
        "ok": "16748",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10904",
        "ok": "10904",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5312",
        "ok": "5312",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3353",
        "ok": "3353",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4483",
        "ok": "4479",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8473",
        "ok": "8472",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10489",
        "ok": "10489",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10773",
        "ok": "10773",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1693,
    "percentage": 10
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 122,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 14933,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "192.506",
        "ok": "192.506",
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
