var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "21780",
        "ok": "21216",
        "ko": "564"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "15028",
        "ok": "15028",
        "ko": "307"
    },
    "meanResponseTime": {
        "total": "1962",
        "ok": "2011",
        "ko": "110"
    },
    "standardDeviation": {
        "total": "1527",
        "ok": "1517",
        "ko": "45"
    },
    "percentiles1": {
        "total": "1510",
        "ok": "1525",
        "ko": "97"
    },
    "percentiles2": {
        "total": "2347",
        "ok": "2378",
        "ko": "135"
    },
    "percentiles3": {
        "total": "4445",
        "ok": "4552",
        "ko": "194"
    },
    "percentiles4": {
        "total": "9235",
        "ok": "9278",
        "ko": "213"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 930,
    "percentage": 4
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4057,
    "percentage": 19
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 16229,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 564,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "558.462",
        "ok": "544",
        "ko": "14.462"
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
        "ok": "21216",
        "ko": "564"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "15028",
        "ok": "15028",
        "ko": "307"
    },
    "meanResponseTime": {
        "total": "1962",
        "ok": "2011",
        "ko": "110"
    },
    "standardDeviation": {
        "total": "1527",
        "ok": "1517",
        "ko": "45"
    },
    "percentiles1": {
        "total": "1510",
        "ok": "1525",
        "ko": "97"
    },
    "percentiles2": {
        "total": "2347",
        "ok": "2378",
        "ko": "135"
    },
    "percentiles3": {
        "total": "4445",
        "ok": "4552",
        "ko": "194"
    },
    "percentiles4": {
        "total": "9235",
        "ok": "9278",
        "ko": "213"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 930,
    "percentage": 4
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4057,
    "percentage": 19
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 16229,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 564,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "558.462",
        "ok": "544",
        "ko": "14.462"
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
