var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "21780",
        "ok": "20636",
        "ko": "1144"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "36"
    },
    "maxResponseTime": {
        "total": "15025",
        "ok": "15025",
        "ko": "449"
    },
    "meanResponseTime": {
        "total": "927",
        "ok": "965",
        "ko": "236"
    },
    "standardDeviation": {
        "total": "1198",
        "ok": "1220",
        "ko": "98"
    },
    "percentiles1": {
        "total": "569",
        "ok": "588",
        "ko": "254"
    },
    "percentiles2": {
        "total": "969",
        "ok": "1030",
        "ko": "322"
    },
    "percentiles3": {
        "total": "2810",
        "ok": "2922",
        "ko": "372"
    },
    "percentiles4": {
        "total": "7010",
        "ok": "7012",
        "ko": "380"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 13373,
    "percentage": 61
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2622,
    "percentage": 12
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 4641,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1144,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "558.462",
        "ok": "529.128",
        "ko": "29.333"
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
        "ok": "20636",
        "ko": "1144"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "36"
    },
    "maxResponseTime": {
        "total": "15025",
        "ok": "15025",
        "ko": "449"
    },
    "meanResponseTime": {
        "total": "927",
        "ok": "965",
        "ko": "236"
    },
    "standardDeviation": {
        "total": "1198",
        "ok": "1220",
        "ko": "98"
    },
    "percentiles1": {
        "total": "569",
        "ok": "588",
        "ko": "254"
    },
    "percentiles2": {
        "total": "969",
        "ok": "1030",
        "ko": "322"
    },
    "percentiles3": {
        "total": "2810",
        "ok": "2922",
        "ko": "372"
    },
    "percentiles4": {
        "total": "7010",
        "ok": "7012",
        "ko": "380"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 13373,
    "percentage": 61
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2622,
    "percentage": 12
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 4641,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1144,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "558.462",
        "ok": "529.128",
        "ko": "29.333"
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
