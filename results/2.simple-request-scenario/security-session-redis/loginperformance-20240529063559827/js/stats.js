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
        "total": "40968",
        "ok": "40968",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "10008",
        "ok": "10008",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13305",
        "ok": "13305",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1441",
        "ok": "1441",
        "ko": "-"
    },
    "percentiles2": {
        "total": "21493",
        "ok": "21493",
        "ko": "-"
    },
    "percentiles3": {
        "total": "35653",
        "ok": "35653",
        "ko": "-"
    },
    "percentiles4": {
        "total": "38047",
        "ok": "38047",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 270,
    "percentage": 42
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 38,
    "percentage": 6
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
        "total": "40968",
        "ok": "40968",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "18252",
        "ok": "18252",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "14446",
        "ok": "14446",
        "ko": "-"
    },
    "percentiles1": {
        "total": "21435",
        "ok": "21435",
        "ko": "-"
    },
    "percentiles2": {
        "total": "31981",
        "ok": "31981",
        "ko": "-"
    },
    "percentiles3": {
        "total": "36855",
        "ok": "36855",
        "ko": "-"
    },
    "percentiles4": {
        "total": "38472",
        "ok": "38472",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 93,
    "percentage": 29
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 232,
    "percentage": 71
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
        "total": "23798",
        "ok": "23798",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1763",
        "ok": "1763",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3066",
        "ok": "3066",
        "ko": "-"
    },
    "percentiles1": {
        "total": "690",
        "ok": "690",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1905",
        "ok": "1905",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5498",
        "ok": "5498",
        "ko": "-"
    },
    "percentiles4": {
        "total": "16380",
        "ok": "16380",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 177,
    "percentage": 54
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 38,
    "percentage": 12
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 110,
    "percentage": 34
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
