
// Put imports here that you wish to use for script blocks in event sheets, e.g.:

// import * as myModule from "./mymodule.js";

// Then you can use 'myModule' in script blocks in event sheets.


const scriptsInEvents = {

	async My_event_sheet_Event1_Act1(runtime, localVars)
	{
		
	},

	async My_event_sheet_Event1_Act9(runtime, localVars)
	{
		
	},

	async My_event_sheet_Event1_Act10(runtime, localVars)
	{
			const sessionScore = sessionStorage.getItem("score");
			const currScore = runtime.globalVars.Score;
		
			if(!sessionScore){
			  sessionStorage.setItem("score", 0)
			  runtime.globalVars.highestScore = 0;
			}else{
			 if(sessionScore >= currScore){
				 runtime.globalVars.highestScore = sessionScore
			 
			 }else{
				 runtime.globalVars.highestScore = currScore
			 }
			}
		
	},

	async My_event_sheet_Event1_Act11(runtime, localVars)
	{
		console.log(runtime.objects.objectCollision.getFirstInstance().instVars.xSpawn)
	},

	async My_event_sheet_Event2_Act1(runtime, localVars)
	{
		// runtime.globalVars.XPositionCharacter = 
	},

	async My_event_sheet_Event2_Act6(runtime, localVars)
	{
		runtime.globalVars.screenWidth = runtime.viewportWidth;
		runtime.globalVars.screenHeight = runtime.viewportHeight;
	},

	async My_event_sheet_Event2_Act7(runtime, localVars)
	{
		
		console.log(runtime.objects.objectCollision.getFirstInstance())
	},

	async My_event_sheet_Event4_Act5(runtime, localVars)
	{
		sessionStorage.setItem("score", runtime.globalVars.highestScore);
	},

	async My_event_sheet_Event5_Act7(runtime, localVars)
	{
		const result = Math.floor(Math.random() * (10-1) + 1);
		if(result % 2 === 0){
		 runtime.objects.objectCollision.getFirstInstance().instVars.xSpawn = 0
		}else{
		 runtime.objects.objectCollision.getFirstInstance().instVars.xSpawn = runtime.globalVars.screenWidth
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

