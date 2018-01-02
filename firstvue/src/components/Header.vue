<template>
<div id="header">
	<nav class="aui-bar aui-bar-nav aui-bar-light">
		<div class="aui-row aui-margin-l-5">
			<div class="aui-col-xs-1 aui-margin-l-15 aui-margin-r-10">
				<i class="fa fa-envelope-o"></i>
			</div>
			<div class="aui-col-xs-6 aui-margin-r-15 aui-margin-b-10">
				<div class="aui-searchbar-input aui-border-radius aui-margin-t-10" tapmode>
					<input type="search" placeholder="请输入搜索内容" id="search-input">
				</div>
			</div>
			<div class="aui-col-xs-3">
				<i class="fa fa-clock-o aui-margin-r-15 aui-margin-l-15"></i>
				<i class="fa fa-download aui-margin-l-10"></i>
			</div>
		</div>
	</nav>
	<div class="aui-content">
		<nav class="aui-tab" id="tab">
			<div class="aui-tab-item" tapmode>
					分类
			</div>
			<div class="aui-tab-item" tapmode>
					推荐
			</div>
			<div class="aui-tab-item" tapmode>
					精品
			</div>
			<div class="aui-tab-item" tapmode>
					直播
			</div>
			<div class="aui-tab-item" tapmode>
					广播
			</div>
		</nav>
	</div>
	</div>
</template>

<script>
export default {
  name: 'Header'
  }
</script>
<style>
#search {
	background: #ffffff
	}
#search-input {
	background: #ebeced;
	color: #9e9e9e
		}
.aui-searchbar-input {
	background: #ebeced;
		}
.item-bg {
	background: #ffffff
		}
</style>

