var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "21780",
        "ok": "17204",
        "ko": "4576"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "74"
    },
    "maxResponseTime": {
        "total": "28032",
        "ok": "28032",
        "ko": "5674"
    },
    "meanResponseTime": {
        "total": "5006",
        "ok": "5726",
        "ko": "2301"
    },
    "standardDeviation": {
        "total": "3380",
        "ok": "3438",
        "ko": "816"
    },
    "percentiles1": {
        "total": "3712",
        "ok": "4216",
        "ko": "2224"
    },
    "percentiles2": {
        "total": "7878",
        "ok": "8463",
        "ko": "2817"
    },
    "percentiles3": {
        "total": "11321",
        "ok": "11924",
        "ko": "3839"
    },
    "percentiles4": {
        "total": "14571",
        "ok": "14681",
        "ko": "4079"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 604,
    "percentage": 3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 136,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 16464,
    "percentage": 76
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 4576,
    "percentage": 21
},
    "meanNumberOfRequestsPerSecond": {
        "total": "410.943",
        "ok": "324.604",
        "ko": "86.34"
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
        "total": "21780",
        "ok": "17204",
        "ko": "4576"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "74"
    },
    "maxResponseTime": {
        "total": "28032",
        "ok": "28032",
        "ko": "5674"
    },
    "meanResponseTime": {
        "total": "5006",
        "ok": "5726",
        "ko": "2301"
    },
    "standardDeviation": {
        "total": "3380",
        "ok": "3438",
        "ko": "816"
    },
    "percentiles1": {
        "total": "3712",
        "ok": "4215",
        "ko": "2224"
    },
    "percentiles2": {
        "total": "7878",
        "ok": "8465",
        "ko": "2817"
    },
    "percentiles3": {
        "total": "11321",
        "ok": "11924",
        "ko": "3839"
    },
    "percentiles4": {
        "total": "14571",
        "ok": "14681",
        "ko": "4079"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 604,
    "percentage": 3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 136,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 16464,
    "percentage": 76
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 4576,
    "percentage": 21
},
    "meanNumberOfRequestsPerSecond": {
        "total": "410.943",
        "ok": "324.604",
        "ko": "86.34"
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
