var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "43530",
        "ok": "19089",
        "ko": "24441"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "28007",
        "ok": "28007",
        "ko": "19203"
    },
    "meanResponseTime": {
        "total": "3882",
        "ok": "5304",
        "ko": "2771"
    },
    "standardDeviation": {
        "total": "4315",
        "ok": "4220",
        "ko": "4055"
    },
    "percentiles1": {
        "total": "2308",
        "ok": "3086",
        "ko": "191"
    },
    "percentiles2": {
        "total": "7287",
        "ok": "7944",
        "ko": "5217"
    },
    "percentiles3": {
        "total": "12742",
        "ok": "13696",
        "ko": "10102"
    },
    "percentiles4": {
        "total": "15623",
        "ok": "16120",
        "ko": "15162"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 604,
    "percentage": 1
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 138,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 18347,
    "percentage": 42
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 24441,
    "percentage": 56
},
    "meanNumberOfRequestsPerSecond": {
        "total": "967.333",
        "ok": "424.2",
        "ko": "543.133"
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
        "total": "43530",
        "ok": "19089",
        "ko": "24441"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "28007",
        "ok": "28007",
        "ko": "19203"
    },
    "meanResponseTime": {
        "total": "3882",
        "ok": "5304",
        "ko": "2771"
    },
    "standardDeviation": {
        "total": "4315",
        "ok": "4220",
        "ko": "4055"
    },
    "percentiles1": {
        "total": "2309",
        "ok": "3086",
        "ko": "195"
    },
    "percentiles2": {
        "total": "7283",
        "ok": "7944",
        "ko": "5216"
    },
    "percentiles3": {
        "total": "12742",
        "ok": "13696",
        "ko": "10102"
    },
    "percentiles4": {
        "total": "15626",
        "ok": "16120",
        "ko": "15162"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 604,
    "percentage": 1
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 138,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 18347,
    "percentage": 42
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 24441,
    "percentage": 56
},
    "meanNumberOfRequestsPerSecond": {
        "total": "967.333",
        "ok": "424.2",
        "ko": "543.133"
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
