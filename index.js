allahus = [ "nr1.mp3", "nr10.mp3", "nr11.mp3", "nr12.mp3", "nr13.mp3", "nr14.mp3", "nr15.mp3", "nr16.mp3", "nr17.mp3", "nr18.mp3", "nr19.mp3", "nr20.mp3", "nr21.mp3", "nr22.mp3", "nr23.mp3", "nr24.mp3", "nr25.mp3", "nr26.mp3", "nr27.mp3", "nr28.mp3", "nr29.mp3", "nr30.mp3", "nr31.mp3", "nr32.mp3", "nr33.mp3", "nr34.mp3", "nr35.mp3", "nr36.mp3", "nr37.mp3", "nr38.mp3", "nr39.mp3", "nr40.mp3", "nr41.mp3", "nr42.mp3", "nr43.mp3", "nr44.mp3", "nr45.mp3", "nr46.mp3", "nr47.mp3", "nr48.mp3", "nr49.mp3", "nr5.mp3", "nr50.mp3", "nr51.mp3", "nr52.mp3", "nr53.mp3", "nr54.mp3", "nr55.mp3", "nr56.mp3", "nr57.mp3", "nr58.mp3", "nr59.mp3", "nr6.mp3", "nr60.mp3", "nr61.mp3", "nr62.mp3", "nr63.mp3", "nr64.mp3", "nr65.mp3", "nr66.mp3", "nr67.mp3", "nr68.mp3", "nr69.mp3", "nr7.mp3", "nr70.mp3", "nr71.mp3", "nr72.mp3", "nr73.mp3", "nr74.mp3", "nr75.mp3", "nr76.mp3", "nr77.mp3", "nr78.mp3", "nr8.mp3", "nr9.mp3" ]
nasheeds = [ "nasheed.mp3", "nasheed1.mp3", "nasheed2.mp3", "nasheed3.mp3" ]

lastplayed = 0
takbir_level = 0

function getTime()
{
	var date = new Date()
	return date.getTime()
}

function ready() {
	nasheed = document.getElementById("nasheed")
	allahu = document.getElementById("allahu")
	btn = document.getElementById("btn")
	btn.addEventListener("click", play)
	setInterval(tick, 500)

	btn.style.left = ((window.innerWidth - btn.clientWidth) / 2) + "px"
	btn.style.top = ((window.innerHeight - btn.clientHeight) / 2) + "px"
	allahu.addEventListener("ended", endplay_allahu)
	nasheed.addEventListener("ended", endplay_nasheed)
}

function play()
{
	if (allahu.paused)
	{
		allahu.src = allahus[Math.floor(Math.random() * allahus.length)]
		allahu.play()
		if (getTime() - lastplayed < 10000 || lastplayed == 0)
			takbir_level += 1
		else
			takbir_level = 1

		lastplayed = getTime()

		if (takbir_level > 2)
		{
			nasheed.volume = 0.5
			if (nasheed.paused) nasheed.src = nasheeds[Math.floor(Math.random() * nasheeds.length)]
			nasheed.play()
		}
	}
}

function endplay_allahu()
{
	allahu.pause()
	allahu.currentTime = 0
}
function endplay_nasheed()
{
	nasheed.pause()
	nasheed.currentTime = 0
}

function tick()
{
	if (!nasheed.paused)
	{
		if (getTime() - lastplayed > 15000)
		{
			nasheed.pause()
			nasheed.currentTime = 0
		}
	}
}

window.addEventListener("load", ready)
