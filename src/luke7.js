(function () {
	var pad = function (number) {
		return number > 9 ? "" + number : "0" + number;
	}

	var countColors = function (imageData) {
		var i, 
			color, 
			colors = {},
			pixels = imageData.data;

		for(i = 0; i < pixels.length; i += 4) {
			color = pad(pixels[i]);
			color += pad(pixels[i+1]);
			color += pad(pixels[i+2]);
			color += pad(pixels[i+3]);
			if(colors[color]) {
				colors[color].count++;
			}
			else {
				colors[color] = {count : 1};
			}
		}

		return colors;
	};

	var topTen = {
		list : [],
		evaluate : function (color) {
			this.list.push(color);
			this.sort();
			if(this.list.length > 10) {
				this.list.pop();
			}
		},
		sort : function () {
			var i,
				j,
				tmp;

			for(i = 0; i < this.list.length; i++) {
				swapDone = false;
				for(j = 0; j < this.list.length - 1; j++) {
					if(this.list[j+1].count > this.list[j].count) {
						tmp = this.list[j+1];
						this.list[j+1] = this.list[j];
						this.list[j] = tmp;
						swapDone = true;
					}
				}
				if(!swapDone) break;
			}
		}
	};

	var printList = function (list) {
		var i;
		for(i = 0; i < list.length; i++) {
			console.log("#" + (i+1) + ": " + list[i].color + " : " + list[i].count);
		}
	}

	$(function () {
		var img = $("#bilde")[0],
			canvas = $("<canvas/>")[0],
			colorsObject,
			colorsArray = [], 
			ctx,
			color;

		canvas.width = img.width;
		canvas.height = img.height;
		ctx = canvas.getContext("2d");
		ctx.drawImage(img, 0, 0, img.width, img.height);

		colorsObject = countColors(ctx.getImageData(0,0,img.width, img.height));

		for(color in colorsObject) {
			if(colorsObject.hasOwnProperty(color)) {
				topTen.evaluate({
						color : color,
						count : colorsObject[color].count
					});
			}
		}

		printList(topTen.list);
		console.log("All done!");
	});
}());