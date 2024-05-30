var ttList = []
var count = 0
		function addtt() {
			var index = document.getElementById('index').value
			var maso = document.getElementById('maso').value
			var loaitk = document.getElementById('loaitk').value
			var name = document.getElementById('name').value
			var cmnd = document.getElementById('cmnd').value
			var date = document.getElementById('date').value
            var money = document.getElementById('money').value

			var tt = {
				'maso': maso,
				'loaitk': loaitk,
				'name': name,
				'cmnd': cmnd,
				'date': date,
                'money': money
			}

			if(index != '') {
				ttList[index] = tt
				showtt()
				return;
			}
			ttList.push(tt)

			document.getElementById('result').innerHTML += `<tr>
						<td>${++count}</td>
						<td>${maso}</td>
						<td>${loaitk}</td>
						<td>${name}</td>
						<td>${cmnd}</td>
						<td>${date}</td>
                        <td>${money}</td>
						<td><button class="btn btn-warning" onclick="edittt(${count - 1})">Sua</button></td>
						<td><button class="btn btn-danger" onclick="deletett(${count - 1})">Xoa</button></td>
					</tr>`
		}

		function deletett(index) {
			let check = confirm("Bạn muốn xóa thong tin  ?")
			if(check){
				console.log(index)
				ttList.splice(index, 1);
				showtt();

			}
			else{
				alert("Thao tác không được thực hiện!");
			}
		}

		function showtt() {
			document.getElementById('result').innerHTML = ''

			for (var i = 0; i < ttList.length; i++) {
				document.getElementById('result').innerHTML += `<tr>
						<td>${i+1}</td>
						<td>${ttList[i].maso}</td>
						<td>${ttList[i].loaitk}</td>
						<td>${ttList[i].name}</td>
						<td>${ttList[i].cmnd}</td>
						<td>${ttList[i].date}</td>
                        <td>${ttList[i].money}</td>
						<td><button class="btn btn-warning" onclick="edittt(${i})">Sua</button></td>
						<td><button class="btn btn-danger" onclick="deletett(${i})">Xoa</button></td>
					</tr>`
			}
		}

		function edittt(index) {
			let check = confirm("Bạn muốn sửa thong tin  ");
			if(check){
				var tt = ttList[index]
			console.log(tt)
			document.getElementById('index').value = index
			document.getElementById('maso').value = tt.maso
			document.getElementById('loaitk').value = tt.loaitk
			document.getElementById('name').value = tt.name
			document.getElementById('cmnd').value = tt.cmnd
			document.getElementById('date').value = tt.date;
            document.getElementById('money').value = tt.money;
				showProduct();
			}
			else{
				alert("Thao tác không được thực hiện!");
			}
			
		}