
var el = $('#circle0'), inited = false;

el.appear({ force_process: true });

el.on('appear', function() 
{
  if (!inited) 
  {
    el.circleProgress(
    { 
      size:120,
      thickness:11,
      fill:{color:"#F7EC37" }
    }).on('circle-animation-progress', function (event,progress,value) 
    {
      $('#value0')	.text((value * 100).toFixed()+"%");
    });
    inited = true;
  }
});

var el1 = $('#circle1'), inited1 = false;

el1.appear({ force_process: true });

el1.on('appear', function() 
{
  if (!inited1) 
  {
    el1.circleProgress(
    {
      size:120,
      thickness:11,
      fill:{color:"#F7EC37"}
    }).on('circle-animation-progress', function (event, progress,value) 
    {
      $('#value1')	.text((value * 100).toFixed()+"%");
    });
    inited1 = true;
  }
});

var el2 = $('#circle2'), inited2 = false;

el2.appear({ force_process: true });

el2.on('appear', function()
{
  if (!inited2) 
  {
    el2.circleProgress(
    {
      size:120,
      thickness:11,
      fill:{color:"#F7EC37"}
    }).on('circle-animation-progress', function (event, progress,value) 
    {
      $('#value2')	.text((value * 100).toFixed()+"%");
    });
    inited2 = true;
  }
});

var el3 = $('#circle3'), inited3 = false;

el3.appear({ force_process: true });

el3.on('appear', function() 
{
  if (!inited3) 
  {
    el3.circleProgress(
    {
      size:120,
      thickness:11,
      fill:{color:"#F7EC37"}
    }).on('circle-animation-progress', function (event, progress,value) 
    {
      $('#value3').text((value * 100).toFixed()+"%");
    });
    inited3 = true;
  }
});	