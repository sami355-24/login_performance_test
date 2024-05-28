var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "28540",
        "ok": "24988",
        "ko": "3552"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "31216",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "6031",
        "ok": "6878",
        "ko": "73"
    },
    "standardDeviation": {
        "total": "4900",
        "ok": "4616",
        "ko": "1565"
    },
    "percentiles1": {
        "total": "5986",
        "ok": "6531",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8191",
        "ok": "8491",
        "ko": "0"
    },
    "percentiles3": {
        "total": "16132",
        "ok": "16213",
        "ko": "1"
    },
    "percentiles4": {
        "total": "17077",
        "ok": "17348",
        "ko": "1"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1372,
    "percentage": 5
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1687,
    "percentage": 6
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 21929,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3552,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "361.266",
        "ok": "316.304",
        "ko": "44.962"
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
        "total": "14270",
        "ok": "12494",
        "ko": "1776"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "11",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "31216",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "7616",
        "ok": "8688",
        "ko": "68"
    },
    "standardDeviation": {
        "total": "5698",
        "ok": "5220",
        "ko": "2012"
    },
    "percentiles1": {
        "total": "6690",
        "ok": "7290",
        "ko": "0"
    },
    "percentiles2": {
        "total": "10082",
        "ok": "11341",
        "ko": "0"
    },
    "percentiles3": {
        "total": "16484",
        "ok": "16560",
        "ko": "1"
    },
    "percentiles4": {
        "total": "31014",
        "ok": "31017",
        "ko": "1"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 236,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 94,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 12164,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1776,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "180.633",
        "ok": "158.152",
        "ko": "22.481"
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
        "total": "14270",
        "ok": "12494",
        "ko": "1776"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "12308",
        "ok": "9208",
        "ko": "12308"
    },
    "meanResponseTime": {
        "total": "4447",
        "ok": "5068",
        "ko": "78"
    },
    "standardDeviation": {
        "total": "3246",
        "ok": "2969",
        "ko": "921"
    },
    "percentiles1": {
        "total": "5397",
        "ok": "5809",
        "ko": "0"
    },
    "percentiles2": {
        "total": "7461",
        "ok": "7902",
        "ko": "0"
    },
    "percentiles3": {
        "total": "8800",
        "ok": "8805",
        "ko": "1"
    },
    "percentiles4": {
        "total": "9118",
        "ok": "9129",
        "ko": "1"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1136,
    "percentage": 8
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1593,
    "percentage": 11
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9765,
    "percentage": 68
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1776,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "180.633",
        "ok": "158.152",
        "ko": "22.481"
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
